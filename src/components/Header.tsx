'use client'
import React from 'react';
import Profile from './Profile'
import Link from 'next/link';
import HomeIcon from './ui/HomeIcon';
import HomeFillIcon from './ui/HomeFillIcon'
import SearchIcon from './ui/SearchIcon'
import SearchFillIcon from './ui/SearchFillIcon'
import NewIcon from './ui/NewIcon'
import NewFillIcon from './ui/NewFillIcon'
import ColorButton from './ui/ColorButton';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"

const menu = [
    {
        href: '/',
        icon: <HomeIcon />,
        clickedIcon: <HomeFillIcon />
    },
    {
        href: '/search',
        icon: <SearchIcon />,
        clickedIcon: <SearchFillIcon />
    },
    {
        href: '/new',
        icon: <NewIcon />,
        clickedIcon: <NewFillIcon />
    },
]

const Header = () => {
    const pathName = usePathname();
    const { data: session } = useSession()

    const user = session?.user;

    return (
        <header className='flex items-center justify-between gap-x-4 px-4 py-2 border border-slate-100'>
            <Link href='/'>
                <span className='font-bold text-xl'>Instantgram</span>
            </Link>
            <div className='flex items-center justify-between gap-2'>
                {
                    menu.map(item => <div key={item.href}>
                        <Link href={item.href}>
                            {pathName === item.href ? item.clickedIcon : item.icon}
                        </Link>
                    </div>)
                }
                {user && 
                    <Link href={`/user/${user.username}`}>
                        <Profile size='small' heighlight image={user.image} />
                    </Link>
                }
                {
                    session ? <ColorButton text='Sign out' onClick={() => signOut()} /> :
                    <ColorButton text='Sign in' onClick={() => signIn()} />
                }
            </div>
        </header>
    );
};

export default Header;