import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

type PaginationProps = {
    data: any[] | null;
    setCurrentItems: (items: any[] | null) => void;
}

type PaginateProps = {
    selected: number;
}

export const Pagination = ({ data, setCurrentItems }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const itemsPerPage = 20;

    useEffect(() => {
        if (data) {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            const getPageCount = Math.ceil(data.length / itemsPerPage);
            const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
            setCurrentItems(currentItems);
            setPageCount(getPageCount);
        } else {
            setCurrentItems([]);
        }
    }, [currentPage, setCurrentItems, data, itemsPerPage]);

    const paginate = ({ selected }: PaginateProps) => {
        setCurrentPage(selected + 1);
    };

    return (
        <ReactPaginate
            onPageChange={paginate}
            pageCount={pageCount}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageRangeDisplayed={10}
            containerClassName={'flex justify-center mb-20'}
            pageLinkClassName={'hidden px-4 py-2 mx-1 text-darkGray transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-darkGray dark:text-gray-200 hover:bg-darkGray dark:hover:bg-white hover:text-white dark:hover:text-darkGray'}
            previousLinkClassName={'px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-darkGray dark:text-gray-600'}
            nextLinkClassName={'px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-darkGray dark:text-gray-200 hover:bg-darkGray dark:hover:bg-white hover:text-white dark:hover:text-darkGray'}
            activeLinkClassName={'bg-darkGray text-white'}
        />
    )
}
