import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import usePagination from '@/utils/usePagination';

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

    const currentItems = usePagination(data, currentPage, itemsPerPage);

    useEffect(() => {
        if (data) {
            const getPageCount = Math.ceil(data.length / itemsPerPage);
            setPageCount(getPageCount);
        }
    }, [data, itemsPerPage]);

    useEffect(() => {
        setCurrentItems(currentItems);
    }, [currentItems, setCurrentItems]);

    const isPageChange = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const paginate = ({ selected }: PaginateProps) => {
        setCurrentPage(selected + 1);
    };

    return (
        <ReactPaginate
            onClick={isPageChange}
            onPageChange={paginate}
            pageCount={pageCount}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakClassName={'font-semibold text-darkGray hidden md:block'}
            containerClassName={'flex justify-center mb-20 mt-10 md:mt-20'}
            pageLinkClassName={'font-semibold px-3 md:px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md sm:inline text-darkGray bg-white hover:text-white hover:bg-darkGray dark:text-white dark:bg-darkGray dark:hover:text-darkGray dark:hover:bg-white'}
            previousLinkClassName={'font-semibold px-3 md:px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md sm:inline text-darkGray bg-white hover:text-white hover:bg-darkGray dark:text-white dark:bg-darkGray dark:hover:text-darkGray dark:hover:bg-white'}
            nextLinkClassName={'font-semibold px-3 md:px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md sm:inline text-darkGray bg-white hover:text-white hover:bg-darkGray dark:text-white dark:bg-darkGray dark:hover:text-darkGray dark:hover:bg-white'}
            activeLinkClassName={'font-semibold px-3 md:px-4 py-2 mx-1 transition colors duration-300 transform !text-white !bg-darkGray dark:!text-darkGray dark:!bg-white'}
            disabledClassName={'hidden'}
            breakLinkClassName={'hidden'}
        />
    )
}
