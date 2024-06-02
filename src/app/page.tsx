import React from 'react';
import FollowingBar from '@/components/FollowingBar';
import Sidebar from '@/components/Sidebar';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/lib/auth'
import { redirect } from 'next/navigation';
import PostList from '@/components/PostList';

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin")
  }
  return (
    <section className='w-full p-4 flex flex-col md:flex-row'>
      <div className='w-full basis-3/4'>
        <div className='w-1/2 mx-auto'>
              <FollowingBar />
          </div>
          <div className='w-1/2 mx-auto'>
              <PostList />
        </div>
      </div>
      <div className='basis-1/4 ml-8'>
        <Sidebar user={user} />
      </div>
    </section>
  );
}
