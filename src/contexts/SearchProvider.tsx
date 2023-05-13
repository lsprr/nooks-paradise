import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const SearchContext = createContext({
    search: '',
    setSearch: (_search: string) => { },
    query: '',
    setQuery: (_query: string) => { },
    currentPage: 1,
    setCurrentPage: (_currentPage: number) => { },
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const savedSearch = localStorage.getItem('search');
        if (savedSearch) {
            setSearch(savedSearch);
            setQuery(savedSearch);
            setCurrentPage(1);
        }
    }, []);

    useEffect(() => {
        if (search) {
            localStorage.setItem('search', search);
        } else {
            localStorage.removeItem('search');
        }
    }, [search]);

    return (
        <SearchContext.Provider value={{ search, setSearch, query, setQuery, currentPage, setCurrentPage }}>
            {children}
        </SearchContext.Provider>
    );
};
