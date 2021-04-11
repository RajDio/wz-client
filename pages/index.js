import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
import { useState } from 'react';

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

// renderSignUp = () => {

// }

export default function Home({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  return (
    <div className="container mx-auto m-20">
		<div className="grid grid-cols-1 rounded-md bg-gray-50">
			{users.map((user, index) => (
				<div className="m-5" key={index}>
					<pre>{JSON.stringify(user, null, 2)}</pre>
				</div>
			))}
		</div>
    </div>
  )
}
