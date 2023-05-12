import { useState } from 'react';
import { SearchContext } from '@contexts/SearchContext';

type SearchProviderProps = {
    children: React.ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};
