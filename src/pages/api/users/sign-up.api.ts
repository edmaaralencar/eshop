import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { hash } from 'bcryptjs'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    const userExists = await prisma.user.findFirst({
      where: { email }
    })

    if (userExists) {
      return res
        .status(400)
        .json({ message: 'There is already a user with this email.' })
    }

    await prisma.user.create({
      data: {
        name,
        email,
        password: await hash(password, 10)
      }
    })

    return res.status(201).json({ message: 'User created succesfully.' })
  } else {
    return res.status(400).json({ message: 'Method not allowed.' })
  }
}
