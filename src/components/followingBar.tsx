'use client';
import useMe from '@/hooks/me';
import Link from 'next/link';
import React from 'react';
import { PropagateLoader } from 'react-spinners';
import Profile from './Profile'
import ScrollableBar from './ui/ScrollableBar';

const FollowingBar = () => {
    const {user, isLoading: loading, error} = useMe();
    // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
    // 이 때 사용자의 아이디를 백엔드에 보낼 필요는 없다. 로그인이 성공적으로 되면 서버에게서부터 로그인이 됐다는 응답헤더에 쿠키를 받아오기 때문에 헤더에 들어있는 토큰 정보를 이용해서 이 사람이 누구인지, 로그인을 했는지에 대한 정보를 받아올 수 있음
    // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서 
    // 3. 백엔드에서 사용자의 상세정보를 새니티에서 가지고 옴 (팔로잉중인 사람들)
    // 4. 여기에서, 클라이언트 컴포넌트에서 팔로잉중인 사람들의 정보를 UI에 보여줌
    // (image, username)

    // const users = data?.following;
    // const users = undefined;
    const users = user?.following;

    return (
        <>
            <section className='w-full flex justify-center items-center shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto mt-2'>
                {
                    loading ? (
                    <PropagateLoader size={8} color='red' />
                    ) : (
                        (!users || users.length === 0) && <p>{`You don't have following`}</p>
                    )
                }
                {users && users.length > 0 && 
                    <ScrollableBar>
                        {users.map(({image, username}) => (
                            <Link href={`/user/${username}`} key={username}>
                                <Profile username={username} image={image} size='large' heighlight />
                            </Link>
                        ))}
                    </ScrollableBar>
                }
            </section>
        </>
    );
};

export default FollowingBar;