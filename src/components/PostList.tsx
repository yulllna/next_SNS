'use client';
import FeedCard from '@/components/FeedCard';
import MoonSpinner from './ui/MoonSpinner';
import usePosts from '../hooks/posts';

const PostList = () => {
    const {posts, isLoading: loading} = usePosts();

    return (
        <section>
            {loading && <div className='flex justify-center items-center mt-32'>
                <MoonSpinner size={50} color='red' />
            </div>}
            {
                posts && <ul>
                    {posts && posts.map((post, index) => <FeedCard key={post.id} post={post} priority={index < 2} />)}
                </ul>
            }
        </section>
    );
};

export default PostList;