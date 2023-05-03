import { fetchData } from '@/utils/api';

export const useFetchData = () => {
    const fetchFunction = (category: string, page: number, itemsPerPage: number) => {
        return fetchData(category, page, itemsPerPage);
    };

    return fetchFunction;
};

