import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { compare } from 'bcryptjs'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const user = await prisma.user.findFirst({
      where: { email }
    })

    if (!user) {
      return res.status(400).json({ message: 'User not found.' })
    }

    const isPasswordCorrect =
      user.password && (await compare(password, user.password))

    if (isPasswordCorrect) {
      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image
      })
    } else {
      return res.status(400).json({ message: 'Invalid credentials.' })
    }
  } else {
    return res.status(400).json({ message: 'Method not allowed.' })
  }
}
