import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { unstable_getServerSession } from 'next-auth'
import { options } from '../auth/[...nextauth].api'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    const { name, email } = req.body

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

    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        email,
        name
      }
    })

    return res.status(200).end()
  } else {
    return res.status(400).json({ message: 'Method not allowed.' })
  }
}
