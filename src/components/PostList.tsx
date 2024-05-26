'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import FeedCard from '@/components/FeedCard';
import { MoonLoader } from 'react-spinners';

const PostList = () => {
    const {data: posts, isLoading: loading} = useSWR<SimplePost[]>('/api/posts')
    console.log(loading);
    console.log(posts);

    return (
        <section>
            {loading && <div className='flex justify-center items-center mt-32'>
                <MoonLoader size={50} color='red' />
            </div>}
            {
                posts && <ul>
                    {posts && posts.map(post => <FeedCard key={post.id} post={post} />)}
                </ul>
            }
        </section>
    );
};

export default PostList;