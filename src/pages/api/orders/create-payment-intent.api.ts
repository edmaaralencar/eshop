import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { stripe } from 'lib/stripe'
import { IProduct } from '../../../@types/product'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { cartItems } = req.body

    const ids = cartItems.map(
      (item: { product: { id: number } }) => item.product.id
    )

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: ids
        }
      },
      include: {
        images: true
      }
    })

    if (!products.length) {
      return res.status(404).json({
        message: 'No valid products found.'
      })
    }

    const total = cartItems?.reduce(
      (acc: number, item: { product: IProduct; quantity: number }) =>
        (acc += item.product.price * item.quantity),
      0
    )

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: 'usd',
        metadata: { cart: JSON.stringify(ids) }
      })

      return res.status(200).json(paymentIntent)
    } catch (error: any) {
      return res.status(400).json({
        message: error.raw.message
      })
    }
  } else {
    return res.status(400).json({ message: 'Method not allowed.' })
  }
}
