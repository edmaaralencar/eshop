import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: id
        }
      },
      include: {
        images: true
      }
    })

    return res.status(200).json(products)
  }

  return res.status(400).json({ message: 'Method not allowed.' })
}
