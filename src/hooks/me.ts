import useSWR from 'swr';
import { HomeUser } from '@/model/user';
import { useCallback } from 'react';

async function updateBookmark(postId: string, bookmark: boolean) {
    return fetch('/api/bookmarks', {
        method: 'PUT',
        body: JSON.stringify({id: postId, bookmark})
    }).then(res => res.json());
}

async function updateFollow(targetId: string, follow: boolean) {
    return fetch('/api/follow', {
        method: 'PUT',
        body: JSON.stringify({id: targetId, follow})
    }).then(res => res.json());
}

export default function useMe() {
    const { data: user, isLoading, error, mutate } = useSWR<HomeUser>('/api/me');

    // 컴포넌트가 리렌더링 된다면 새로운 함수가 setBookmark에 할당. 그걸 prop으로 전달받는 컴포넌트들도 prop이 변경되니 리렌더링 될 것.
    // useCallback 사용. 한 번만 만들어져야하는지, 함수 내부에서 사용하는 디펜던시에 의거해서 새롭게 업데이트 되어야 하는지를 배열로 명시해야 함.(여기에선 user, mutate를 보고 있음)
    const setBookmark = useCallback(
        (postId: string, bookmark: boolean) => {
            if(!user) return;
            const bookmarks = user.bookmarks ?? [];
            const newUser = {
                ...user,
                bookmarks: bookmark ? [...bookmarks, postId] : bookmarks.filter(b => b !== postId)
            }
    
            return mutate(updateBookmark(postId, bookmark), {
                optimisticData: newUser,
                populateCache: false,
                revalidate: false,
                rollbackOnError: true
            })
        },
        [user, mutate]
    )

    const toggleFollow = useCallback((targetId: string, follow: boolean) => {
        return mutate(updateFollow(targetId, follow), {
            populateCache: false
        });
    }, [mutate])

    return {user, isLoading, error, setBookmark, toggleFollow}
}