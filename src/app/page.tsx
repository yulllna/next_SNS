import FeedCard from '@/components/FeedCard';
import React from 'react';
import ProfileList from '@/components/ProfileList';
import Sidebar from '@/components/Sidebar';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin")
  }
  return (
    <section className='w-full max-w-[850px] p-4 flex flex-col md:flex-row'>
      <div className='w-full basis-1/4'>
        <div className='w-1/2 mx-auto'>
              <ProfileList />
          </div>
          <div className='w-1/2 mx-auto'>
              <FeedCard />
              <FeedCard />
        </div>
      </div>
      <div className='basis-1/4'>
        <Sidebar user={user} />
      </div>
    </section>
  );
}
