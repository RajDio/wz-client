export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const user = JSON.parse(req.body);
    const response = await fetch(`${process.env.EXPRESS_URL}/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (response.status === '409') {
      return res.status(409).send('User already exists')
    }
    res.status(201).send(response.body);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: 'Something went wrong' });
  }
  // try {
  //   const user = JSON.parse(req.body);
  //   const users = await prisma.user.findMany({
  //     where: {
  //       username: user.username,
  //       platform: user.platform,
  //       phoneNumber: user.phoneNumber,
  //     }
  //   });
  //   if (users.length > 0) {
  //     throw new Error('User already exists!');
  //   }
  //   const savedUser = await prisma.user.create({ data: user });
  //   res.status(200).json(savedUser);
  // } catch (err) {
  //   console.log(err)
  //   res.status(400).json({ message: 'Something went wrong' });
  // }
};
