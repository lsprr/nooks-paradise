import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

type PaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    current: number;
    onPageChange: (currentPage: number) => void;
}

type PaginateProps = {
    selected: number;
}

export const Pagination = ({ totalItems, itemsPerPage, current, onPageChange }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(current);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        const getPageCount = Math.ceil(totalItems / itemsPerPage);
        setPageCount(getPageCount);
    }, [totalItems, itemsPerPage]);

    useEffect(() => {
        setCurrentPage(current);
    }, [current]);

    const isPageChange = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const paginate = ({ selected }: PaginateProps) => {
        setCurrentPage(selected + 1);
        onPageChange(selected + 1);
    };

    return (
        <nav aria-label="Pagination">
            <ReactPaginate
                onClick={isPageChange}
                onPageChange={paginate}
                pageCount={pageCount}
                forcePage={currentPage - 1}
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakClassName={'font-semibold text-darkGray hidden md:block'}
                containerClassName={'flex justify-center mb-20 mt-10 md:mt-20'}
                pageLinkClassName={'hidden font-semibold px-3 md:px-4 py-2 mx-1 transition-colors duration-300 transform sm:inline text-darkGray bg-creamWhite hover:text-creamWhite hover:bg-darkGray rounded-2xl'}
                previousLinkClassName={'font-semibold px-3 md:px-4 py-2 mx-1 transition-colors duration-300 transform sm:inline text-darkGray bg-creamWhite hover:text-creamWhite hover:bg-darkGray rounded-2xl'}
                nextLinkClassName={'font-semibold px-3 md:px-4 py-2 mx-1 transition-colors duration-300 transform sm:inline text-darkGray bg-creamWhite hover:text-creamWhite hover:bg-darkGray rounded-2xl'}
                activeLinkClassName={'font-semibold px-3 md:px-4 py-2 mx-1 transition colors duration-300 transform !text-creamWhite !bg-darkGray dark:!text-darkGray dark:!bg-creamWhite rounded-2xl'}
                disabledClassName={'hidden'}
                renderOnZeroPageCount={null}
                breakLinkClassName={'hidden'}
            />
        </nav>
    )
}
