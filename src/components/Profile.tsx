import React from 'react';
// import { Image } from 'next/image';
type ProflieSize = 'small' | 'midium' | 'large';
type Props = {
    username?: string;
    image?: string | null;
    size?: ProflieSize;
    heighlight?: boolean;
}

const Profile = ({
    username, 
    image, 
    size='large', 
    heighlight=false
}: Props) => {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <div className={getContainerStyle(size, heighlight)}
        >
                <div className={`rounded-full ${getImageSizeStyle(size)} border-white`}>
                    <img src={image ?? ''} alt={'프로필사진'} className='rounded-full object-cover w-full h-full' referrerPolicy='no-referrer' />
                </div>
            </div>
            {
                username && <span className='text-xs pt-1'>{username}</span>
            }
        </div>
    );
};

function getContainerStyle(size: ProflieSize, heighlight: boolean): string {
    const baseStyle = 'overflow-hidden rounded-full flex items-center justify-center'
    const heighlightStyle = heighlight ? 'bg-[linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]' : '';
    const sizeStyle = getContainerSize(size);
    return `${baseStyle} ${heighlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: ProflieSize): string {
    switch(size) {
        case 'small': return 'w-[34px] h-[34px]'
        case 'midium': return 'w-[44px] h-[44px]'
        case 'large': return 'w-[52px] h-[52px]'
    }
}

function getImageSizeStyle(size: ProflieSize): string {
    switch(size) {
        case 'small': return 'w-[32px] h-[32px] border'
        case 'midium': return 'w-[42px] h-[42px] border-2'
        case 'large': return 'w-[50px] h-[50px] border-2'
    }
}

export default Profile;