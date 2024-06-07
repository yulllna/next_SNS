import { createContext, useContext } from "react";

type cacheKeyValue = {
    postsKey: string;
}
export const cacheKeysContext = createContext<cacheKeyValue>({
    postsKey: '/api/posts',
})

export const useCacheKeys = () => useContext(cacheKeysContext);

