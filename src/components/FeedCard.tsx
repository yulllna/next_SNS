import React from 'react';
import Profile from './Profile';
import CustomCarousel from './CustomCarousel'
import FeedCardTextArea from './FeedCardTextArea';
import { SimplePost } from '@/model/post';
import Image from 'next/image';

type Props = {
    post: SimplePost;
}

const FeedCard = ({ post }: Props) => {
    const {userImage, username, image, createdAt, likes, text} = post;

    return (
        <div className='pt-2 shadow-md mt-2 rounded-md'>
            <div className='flex gap-2 items-center pb-2 px-2'>
                <Profile image={userImage} heighlight />
                <span className='font-bold text-xs'>{username}</span>
            </div>
            <div>
                <CustomCarousel>
                    {
                          <Image
                            src={image} 
                            alt={`photo by ${username}`} 
                            width={500}
                            height={500} 
                            className='aspect-square h-full w-full' />
                    } 
                </CustomCarousel>
            </div>
            <FeedCardTextArea />
        </div>
    );
};

export default FeedCard;