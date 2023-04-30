import { useState, useEffect } from "react";

function usePagination(data: any[] | null, currentPage: number, itemsPerPage: number) {
    const [currentItems, setCurrentItems] = useState<any[] | null>([]);

    useEffect(() => {
        if (data) {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            const slicedData = data.slice(indexOfFirstItem, indexOfLastItem);
            setCurrentItems(slicedData);
        } else {
            setCurrentItems([]);
        }
    }, [data, currentPage, itemsPerPage]);

    return currentItems;
}


export default usePagination;