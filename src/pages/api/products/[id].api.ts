import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query
    const product = await prisma.product.findUnique({
      where: {
        id: String(id)
      },
      include: {
        images: true
      }
    })

    return res.status(200).json(product)
  }

  return res.status(400).json({ message: 'Method not allowed.' })
}
