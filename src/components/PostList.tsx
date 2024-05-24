'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import FeedCard from '@/components/FeedCard';

const PostList = () => {
    const {data: posts, isLoading: loading} = useSWR<SimplePost[]>('/api/posts')
    console.log(loading);
    console.log(posts);

    return (
        <ul>
            {posts && posts.map(post => <li key={post.id}>{post.text}</li>)}
            <FeedCard />
            <FeedCard />
        </ul>
    );
};

export default PostList;