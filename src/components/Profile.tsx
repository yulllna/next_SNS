import Image from 'next/image';
import React from 'react';
// import { Image } from 'next/image';
type ProflieSize = 'small' | 'midium' | 'large' | 'xlarge';
type Props = {
    username?: string;
    image?: string | null;
    size?: ProflieSize;
    highlight?: boolean;
}

const Profile = ({
    username, 
    image, 
    size='large', 
    highlight=false
}: Props) => {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <div className={getContainerStyle(size, highlight)}
        >
                <div className={`rounded-full 
                ${getImageSizeStyle(size).image} border-white`}>
                    <Image src={image ?? ''} alt={'프로필사진'} className='rounded-full object-cover w-full h-full' referrerPolicy='no-referrer' width={300} height={300} />
                </div>
            </div>
            {
                username && <span className='text-xs pt-1'>{username}</span>
            }
        </div>
    );
};

function getContainerStyle(size: ProflieSize, highlight: boolean): string {
    const baseStyle = 'overflow-hidden rounded-full flex items-center justify-center'
    const highlightStyle = highlight ? 'bg-[linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]' : '';
    const { container } = getImageSizeStyle(size);
    return `${baseStyle} ${highlightStyle} ${container}`;
}

type ImageSizeStyle = {
    container: string;
    image: string;
}
function getImageSizeStyle(size: ProflieSize): ImageSizeStyle {
    switch(size) {
        case 'small': 
            return { 
                container: 'w-[34px] h-[34px]', 
                image: 'w-[32px] h-[32px] border',
            }
        case 'midium': 
            return {
                container: 'w-[44px] h-[44px]',
                image: 'w-[42px] h-[42px] border-2',
            }
        case 'large': 
            return {
                container: 'w-[52px] h-[52px]',
                image: 'w-[50px] h-[50px] border-2'
            }
        case 'xlarge': 
            return {
                container: 'w-[142px] h-[142px]',
                image: 'w-[138px] h-[138px] border-4',
            }
        default: 
            throw new Error(`Unsupported type size: ${size}`);
    }
}

export default Profile;