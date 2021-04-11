import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const user = JSON.parse(req.body);
    const savedUser = await prisma.user.create({ data: user });
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: 'Something went wrong' });
  }
};