import { client } from '../../sanity/lib/client'

type OAuthUser = {
    id: string;
    email: string;
    name: string;
    userName: string;
    image?: string | null;
}

export async function addUser({id, userName, email, image, name}: OAuthUser) {
    return client.createIfNotExists({
        _id: id,
        _type: 'user',
        userName,
        email,
        name,
        image,
        following: [],
        followers: [],
        bookmarks: [],
    })
}