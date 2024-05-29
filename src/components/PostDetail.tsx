import React from 'react';
import { FullPost, SimplePost } from '@/model/post';
import useSWR from 'swr';

type Props = {
    post: SimplePost;
}

const PostDetail = ({post}: Props) => {
    const {id, userImage, username, image, createdAt, likes} = post;
    const {data} = useSWR<FullPost>(`/api/posts/${id}`);
    const comments = data?.comments;

    return (
        <div>
            
        </div>
    );
};

export default PostDetail;