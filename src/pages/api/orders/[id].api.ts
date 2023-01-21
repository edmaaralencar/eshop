import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query

    const order = await prisma?.order.findUnique({
      where: {
        id: String(id)
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

    if (!order) {
      return res.status(404).json({
        message: 'Esse pedido não existe.'
      })
    }

    return res.status(200).json(order)
  }

  return res.status(400).json({ message: 'Method not allowed.' })
}
