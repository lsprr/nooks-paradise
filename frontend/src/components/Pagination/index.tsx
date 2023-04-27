import ReactPaginate from 'react-paginate';
import { useEffect, useState, useMemo } from 'react';

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

    const isPageChange = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

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
            pageLinkClassName={'font-semibold hidden px-4 py-2 mx-1 text-darkGray transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-darkGray dark:text-gray-200 hover:bg-darkGray dark:hover:bg-white hover:text-white dark:hover:text-darkGray'}
            previousLinkClassName={'font-semibold px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-darkGray dark:text-gray-600'}
            nextLinkClassName={'font-semibold px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-darkGray dark:text-gray-200 hover:bg-darkGray dark:hover:bg-white hover:text-white dark:hover:text-darkGray'}
            activeLinkClassName={'font-semibold bg-[#2F3939] text-white dark:bg-white dark:text-[#2F3939]'}
        />
    )
}
