import React from 'react';
import { FullPost, SimplePost } from '@/model/post';
import useSWR from 'swr';
import Image from 'next/image';
import PostUserAvatar from './PostUserAvatar';
import ActionBar from './ui/ActionBar';
import CommentForm from './ui/\bCommentForm';
import Profile from './Profile';

type Props = {
    post: SimplePost;
}

const PostDetail = ({post}: Props) => {
    const {id, userImage, username, image, createdAt, likes} = post;
    const {data} = useSWR<FullPost>(`/api/posts/${id}`);
    const comments = data?.comments;

    return (
        <section className='flex w-full h-full'>
            <div className='relative basis-3/5'>
                <Image src={image} alt={`photo by ${username}`} priority fill sizes='650px' className='object-cover' />
            </div>
            <div className='w-full basis-2/5 flex-col overflow-y-auto'>
                <PostUserAvatar image={userImage} username={username} />
                <ul className='border-t border-gray-200 h-full p-4 mb-1'>
                    {comments && comments.map(({image, username: commentUsername, comment}, index) => <li key={index} className='flex items-center mb-1'>
                        <Profile image={image} size='small' heighlight={commentUsername === username}/>
                        <div className='ml-2'>
                            <span className='font-bold mr-1'>
                                {commentUsername}
                            </span>
                            <span>
                                {comment}
                            </span>
                        </div>
                    </li>)}
                </ul>
                <ActionBar likes={likes} username={username} createdAt={createdAt} />
                <CommentForm />
            </div>
        </section>
    );
};

export default PostDetail;