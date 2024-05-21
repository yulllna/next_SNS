import React from 'react';
// import { Image } from 'next/image';

type Props = {
    username?: string;
    image?: string | null;
    size: 'small' | 'normal';
    heighlight?: boolean;
}

const Profile = ({
    username, 
    image, 
    size='normal', 
    heighlight=false
}: Props) => {
    const innerImageSizeStyle = size === 'normal' ? 'w-[32px] h-[32px]' : 'w-8 h-8'
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <div className={getContainerStyle(size, heighlight)}
        >
                <div className={`rounded-full ${innerImageSizeStyle} border border-white`}>
                    <img src={image ?? ''} alt={'프로필사진'} className='rounded-full object-cover w-full h-full' referrerPolicy='no-referrer' />
                </div>
            </div>
            {
                username && <span className='text-xs'>{username}</span>
            }
        </div>
    );
};

function getContainerStyle(size: string, heighlight: boolean): string {
    const baseStyle = 'overflow-hidden rounded-full flex items-center justify-center'
    const heighlightStyle = heighlight ? 'bg-[linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]' : '';
    const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]'
    return `${baseStyle} ${heighlightStyle} ${sizeStyle}`;
}

export default Profile;