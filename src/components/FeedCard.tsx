'use client'
import React, { useState } from 'react';
// import Profile from './Profile';
// import CustomCarousel from './CustomCarousel'
import { SimplePost } from '@/model/post';
import Image from 'next/image';
import CommentForm from './ui/CommentForm';
import ActionBar from './ui/ActionBar';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';

type Props = {
    post: SimplePost;
    priority?: boolean;
}

const FeedCard = ({ post, priority = false }: Props) => {
    const {userImage, username, image, comments, text} = post;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='pt-2 shadow-md mt-2 rounded-md'>
            {/* <div className='flex gap-2 items-center pb-2 px-2'>
                <Profile image={userImage} size='midium' heighlight />
                <span className='font-bold text-xs'>{username}</span>
            </div> */}
            <PostUserAvatar image={userImage} username={username} />
            <div>
                {/* <CustomCarousel> */}
                    {
                        // 각 페이지의 LCP(Large Contentful Paint) 요소가 될 이미지에 priority 속성을 추가. 이렇게 하면 next.js가 로드할 이미지의 우선 순위를 지정할 수 있어 성능을 향상 시킬 수 있다.
                          <Image
                            src={image} 
                            alt={`photo by ${username}`} 
                            width={500}
                            height={500} 
                            className='aspect-square h-full w-full object-cover' priority={priority} onClick={() => setOpenModal(true)} />
                    } 
                {/* </CustomCarousel> */}
            </div>
            <ActionBar post={post}>
                <p className='px-2'>
                    <span className='font-bold mr-1'>{username}</span>
                    {text}
                </p>
                {comments > 1 && <button className='font-bold text-cyan-700 pb-2 px-2' onClick={() => setOpenModal(true)}>View all ${comments} comments</button>}
            </ActionBar>
            <CommentForm />
            {
                openModal && <ModalPortal>
                    <PostModal onClose={() => setOpenModal(false)}>
                        <PostDetail post={post} />
                    </PostModal>
                </ModalPortal>
            }
        </div>
    );
};

export default FeedCard;