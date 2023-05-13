import { useState, useEffect } from "react";
import { fetchData } from '@/utils/api';

export const useFetchData = (category: string, page: number, itemsPerPage: number, query: string) => {
    const [data, setData] = useState(null);
    const [totalCount, setTotalCount] = useState(0);
    const [numPerPage, setNumPerPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(category, page, itemsPerPage, query)
            .then(data => {
                setData(data.data);
                setTotalCount(data.totalCount);
                setNumPerPage(data.itemsPerPage);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [category, page, itemsPerPage, query]);

    return { data, totalCount, numPerPage, loading, error };
};
