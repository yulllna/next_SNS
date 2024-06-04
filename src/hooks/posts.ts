import useSWR from 'swr';
import { SimplePost } from '@/model/post';

async function updateLike(id: string, like: boolean) {
    return fetch('/api/likes', {
        method: 'PUT',
        body: JSON.stringify({id, like})
    }).then(res => res.json());
}

export default function usePosts() {
    const { data: posts, isLoading, error, mutate } = useSWR<SimplePost[]>('/api/posts');
    
    const setLike = (post: SimplePost, username: string, like: boolean) => {
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
    }
    return {posts, isLoading, error, setLike}
}