import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { options } from '../auth/[...nextauth].api'
import { unstable_getServerSession } from 'next-auth'
import { stripe } from 'lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const session = await unstable_getServerSession(req, res, options)

    if (!session) {
      return res.status(401).json({
        message: 'Você precisa estar logado para realizar um pedido.'
      })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: String(session?.user?.email)
      }
    })

    if (!user) {
      return res.status(401).json({
        message: 'Você precisa estar logado para realizar um pedido.'
      })
    }

    const orders = await prisma.order.findMany({
      where: {
        user_id: user.id
      },
      orderBy: {
        created_at: 'desc'
      },
      include: {
        order_products: {
          include: {
            product: {
              include: {
                images: true
              }
            }
          }
        }
      }
    })

    return res.status(200).json(orders)
  }

  if (req.method === 'POST') {
    const { cartItems, paymentIntentId, paymentMethod, total } = req.body

    const session = await unstable_getServerSession(req, res, options)

    if (!session) {
      return res.status(404).json({
        message: 'Você precisa estar logado para realizar um pedido.'
      })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: String(session?.user?.email)
      }
    })

    if (!user) {
      return res.status(404).json({
        message: 'Você precisa estar logado para realizar um pedido.'
      })
    }

    let paymentInfo
    try {
      paymentInfo = await stripe.paymentMethods.retrieve(paymentMethod)
    } catch (error: any) {
      return res.status(402).json({
        message: error?.message
      })
    }

    const order = await prisma.order.create({
      data: {
        user_id: user.id,
        total,
        card_brand: String(paymentInfo.card?.brand),
        card_last4: String(paymentInfo.card?.last4),
        payment_intent_id: paymentIntentId
      }
    })

    const formattedCartItems = cartItems.map(
      (item: { product: { id: string }; quantity: number }) => ({
        product_id: item.product.id,
        quantity: item.quantity,
        order_id: order.id
      })
    )

    await prisma.orderProduct.createMany({
      data: formattedCartItems
    })

    return res.status(200).json(order)
  }

  return res.status(400).json({ message: 'Method not allowed.' })
}
