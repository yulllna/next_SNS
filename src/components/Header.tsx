import React from 'react';
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import Profile from './Profile'

const Header = () => {
    const ICON_STYLE = 'w-6 h-6'
    return (
        <header className='flex items-center justify-between gap-x-4 px-4 py-2 border border-slate-100'>
            <span className='font-bold text-xl'>Instantgram</span>
            <div className='flex items-center justify-between gap-2'>
                <MdHome className={ICON_STYLE} />
                <IoSearch className={ICON_STYLE} />
                <CiSquarePlus className={ICON_STYLE} />
                <Profile />
                <div className='bg-[linear-gradient(
                    to right,#833ab4,#fd1d1d,#fcb045
                    )] bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md inline-block p-0.5'
                >
                    <div className='bg-white rounded-md'>
                        <span className='text-xs px-1'>Sign in</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;