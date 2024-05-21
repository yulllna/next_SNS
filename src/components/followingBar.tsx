'use client';
import React from 'react';
import useSWR from 'swr';
import Profile from './Profile'

const ProfileList = () => {
    const {data, isLoading, error} = useSWR('/api/me')
    console.log(data)
    // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
    // 이 때 사용자의 아이디를 백엔드에 보낼 필요는 없다. 로그인이 성공적으로 되면 서버에게서부터 로그인이 됐다는 응답헤더에 쿠키를 받아오기 때문에 헤더에 들어있는 토큰 정보를 이용해서 이 사람이 누구인지, 로그인을 했는지에 대한 정보를 받아올 수 있음
    // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서 
    // 3. 백엔드에서 사용자의 상세정보를 새니티에서 가지고 옴 (팔로잉중인 사람들)
    // 4. 여기에서, 클라이언트 컴포넌트에서 팔로잉중인 사람들의 정보를 UI에 보여줌
    // (image, username)
    return (
        <div className='flex gap-3 p-4 shadow-sm mt-2 rounded-md'>
            <Profile username={'aa'}  />
            <Profile username={'aa'} />
            <Profile username={'aa'} />
            <Profile username={'aa'} />
        </div>
    );
};

export default ProfileList;