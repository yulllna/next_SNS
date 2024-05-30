'use client'

import { SearchUser } from "@/model/user";
import { FormEvent, useState } from "react";
import useSWR from 'swr';
import MoonSpinner from './ui/MoonSpinner';
import UserCard from './UserCard';
import useDebounce from '../hooks/debounce';

const UserSearch = () => {
    // /api/search/${keyword}
    // 검색하는 키워드가 있다면 /api/search/bob -> 유저 네임이나, 네임 반환
    // 검색하는 키워드가 없다면 /api/search -> 전체 유저
    const [keyword, setKeyword] = useState('');
    const debouncedKeyword = useDebounce(keyword);
    // 키워드가 변경된다면 useSWR에서 알아서 네트워크 요청을 해줄 것임으로 별도 함수로 만들지 않는다.
    const {data: users, isLoading, error} = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault;
    }

    return (
        <section className='w-full max-w-2xl my-4 flex flex-col items-center'>
            <form onSubmit={onSubmit} className='w-full mb-4'>
                <input className='w-full text-xl p-3 outline-none border border-gray-400' type="text" autoFocus placeholder="Search for a username or name" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            </form>
            {error && <p>무언가가 잘 못 되었음 🙅‍♀️</p>}
            {isLoading && <MoonSpinner />}
            {!isLoading && !error && users?.length === 0 && (
                <p>찾는 사용자가 없음 🤦‍♀️</p>
            )}
            <ul className='w-full p-4'>
                {users && users.map((user, index) => <li key={index}>
                    <UserCard user={user}/>
                </li>)}
            </ul>
        </section>
    );
};

export default UserSearch;