'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import FeedCard from '@/components/FeedCard';
// import { GridLoader } from 'react-spinners';

const PostList = () => {
    const {data: posts, isLoading: loading} = useSWR<SimplePost[]>('/api/posts')
    console.log(loading);
    console.log(posts);

    return (
        <section>
            {loading && <div>
                {/* <GridLoader color='red' />     */}
                loading...
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