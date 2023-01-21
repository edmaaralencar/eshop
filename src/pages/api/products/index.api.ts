import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany({
      orderBy: {
        created_at: 'desc'
      },
      include: {
        images: true
      }
    })

    if (!products) {
      return res.status(400).json({
        message: 'Error'
      })
    }

    return res.status(200).json(products)
  }

  if (req.method === 'POST') {
    const { name, description, price, images } = req.body

    try {
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price,
          images: {
            createMany: {
              data: images
            }
          }
        }
      })

      return res.status(201).json(product)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }

  return res.status(400).json({ message: 'Method not allowed.' })
}
