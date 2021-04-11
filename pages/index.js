import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
import { useState } from 'react';
import SignUp from './../components/SignUp';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      initialUsers: users
    }
  };
}

async function saveUser(user) {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default function Home({ initialUsers }) {
  	const [users, setUsers] = useState(initialUsers);

  	return (
		<div className="container mx-auto m-20">
			<div className="grid grid-cols-1">
				<SignUp
					onSubmit={async (user, e) => {
						try {
							await saveUser(user);
							setUsers([...users, user]);
							e.target.reset();
						} catch (err) {
							console.log(err);
						}
					}}
				/>
				{users.map((user, index) => (
					<div className="rounded-md bg-gray-50 m-5" key={index}>
						<pre className="p-10">{JSON.stringify(user, null, 2)}</pre>
					</div>
				))}
			</div>
		</div>
  	)
}
