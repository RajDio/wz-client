import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
import { useState } from 'react';
import Nav from './../components/Nav';
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
			<Nav />
			<div className="h-full flex justify-center items-center">
				<SignUp
					onSubmit={async (user, e) => {
						try {
							await saveUser({
								...user,
								username: user.username.toLowerCase(),
							});
							setUsers([...users, user]);
							e.target.reset();
						} catch (err) {
							console.log(err);
						}
					}}
				/>
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{users.map((user, index) => (
					<div className="rounded-lg bg-dark-300 m-5" key={index}>
						<pre className="text-white p-10">{JSON.stringify(user, null, 2)}</pre>
					</div>
				))}
			</div>
		</div>
  	)
}
