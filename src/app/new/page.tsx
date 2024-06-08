import NewPosts from '@/components/NewPosts';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '../lib/auth';

export const metadata: Metadata = {
    title: 'New Post',
    description: 'Create a new post'
}

const NewPage = async () => {
    const session = await getServerSession(authOptions);
    if(!session?.user) {
        redirect('/auth/signin');
    }

    return (
        <NewPosts user={session.user} />
    )
};

export default NewPage;