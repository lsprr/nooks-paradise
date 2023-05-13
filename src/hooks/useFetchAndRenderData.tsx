import { useFetchData } from '@/hooks/useFetchData';

type FetchAndRenderDataReturnType = {
    data: [] | null;
    totalCount?: number;
    numPerPage?: number;
    loading: boolean;
    error: any;
};

export function useFetchAndRenderData(category: string, currentPage: number, itemsPerPage: number, query: string): FetchAndRenderDataReturnType {
    const { data, totalCount, numPerPage, loading, error } = useFetchData(category, currentPage, itemsPerPage, query);
    return { data, totalCount, numPerPage, loading, error };
}
