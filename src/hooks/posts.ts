import useSWR from 'swr';
import { Comment, SimplePost } from '@/model/post';
import CommentForm from '../components/ui/CommentForm';
import { useCallback } from 'react';
import { useCacheKeys } from '@/context/CacheKeysContext';

async function updateLike(id: string, like: boolean) {
    return fetch('/api/likes', {
        method: 'PUT',
        body: JSON.stringify({id, like})
    }).then(res => res.json());
}

async function addComment(id: string, comment: string) {
    return fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({id, comment})
    }).then(res => res.json());
}

export default function usePosts() {
    const cacheKeys = useCacheKeys();

    const { data: posts, isLoading, error, mutate } = useSWR<SimplePost[]>(cacheKeys.postsKey);
    
    const setLike = useCallback(
        (post: SimplePost, username: string, like: boolean) => {
            const newPost = {
                ...post,
                likes: like ? [...post.likes, username] : post.likes.filter(item => item !== username),
            };
            // 새로 받아온 포스트 데이터의 아이디와 업데이트하고자 하는 아이디와 같다면 새로운 포스트를 사용
            const newPosts = posts?.map(p => p.id === post.id ? newPost : p);
    
            // optimisticData를 사용하면 1.UI를 일단 먼저 업데이트하고 2.데이터가 새로 오면 로컬상 캐시 데이터를 그 데이터로 변경해서 3.다시 업데이트
            return mutate(updateLike(post.id, like), {
                optimisticData: newPosts,
                populateCache: false,
                revalidate: false,
                rollbackOnError: true
            })
        },
        [posts, mutate]
    )

    const postComment = useCallback(
        (post: SimplePost, comment: Comment) => {
            const newPost = {
                ...post,
                comments: post.comments + 1,
            };
            // 새로 받아온 포스트 데이터의 아이디와 업데이트하고자 하는 아이디와 같다면 새로운 포스트를 사용
            const newPosts = posts?.map(p => p.id === post.id ? newPost : p);
    
            // optimisticData를 사용하면 1.UI를 일단 먼저 업데이트하고 2.데이터가 새로 오면 로컬상 캐시 데이터를 그 데이터로 변경해서 3.다시 업데이트
            return mutate(addComment(post.id, comment.comment), {
                optimisticData: newPosts,
                populateCache: false,
                revalidate: false,
                rollbackOnError: true
            })
        },
        [posts, mutate]
    )

    return {posts, isLoading, error, setLike, postComment}
}