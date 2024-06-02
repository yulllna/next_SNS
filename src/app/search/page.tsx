import UserSearch from '../../components/UserSearch';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'User Search',
  description: 'Search users to follow'
};

const SearchPage = () => {
    return (
        <UserSearch />
    )
};

export default SearchPage;