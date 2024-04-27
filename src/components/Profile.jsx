import React from 'react';
// import { Image } from 'next/image';

const Profile = () => {
    return (
        <div className='bg-[linear-gradient(
            to right,#833ab4,#fd1d1d,#fcb045
            )] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] w-[32px] h-[32px] overflow-hidden rounded-full flex items-center justify-center'
        >
            <div className='rounded-full w-[30px] h-[30px] border border-white'>
                <img src='https://source.unsplash.com/random/?cat' alt={'프로필사진'} className='rounded-full object-cover w-full h-full ' />
            </div>
        </div>
    );
};

export default Profile;