import { useState, useEffect } from "react";
import { ApiError } from "@/components/Error/ApiError";
import { Loading } from "@/components/Loading/Loading";
import { CategoryItemCount } from "@/components/CategoryItemCount/CategoryItemCount";
import { ItemGrid } from "@/components/ItemGrid/ItemGrid";
import { Pagination } from "@/components/Pagination/Pagination";
import { CustomTable } from "@/components/Table/CustomTable";
import { Search } from "@/components/Search/Search";
import { Container } from "./Layout/Container";

type DataFetchProps = {
    category: string;
    type: "grid" | "table";
    fetchFunction: (currentPage: number, itemsPerPage: number) => Promise<any>;
    renderGridItem?: (item: any) => JSX.Element | null;
    renderTableHeader?: () => JSX.Element;
    renderTableBody?: (item: any, index: number) => JSX.Element;
};

export const DataFetch = ({ category, type, fetchFunction, renderGridItem, renderTableHeader, renderTableBody }: DataFetchProps) => {
    const [allItems, setAllItems] = useState<Array<any> | null>(null);
    const [displayedItems, setDisplayedItems] = useState<Array<any> | null>(null);
    const [filteredItems, setFilteredItems] = useState<Array<any> | null>(null);
    const [filteredTotalItems, setFilteredTotalItems] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<Error | null>(null);
    const itemsPerPage = 20;

    useEffect(() => {
        fetchFunction(1, -1)
            .then((data) => {
                setAllItems(data.data);
                setTotalItems(data.totalCount);
                setFilteredTotalItems(data.totalCount);
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage(new Error(`Error fetching data. Please try again.`));
                console.error(`Error fetching ${category}:`, error);
            });
    }, [category, fetchFunction]);

    useEffect(() => {
        if (allItems) {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            setDisplayedItems(allItems.slice(startIndex, endIndex));
        }
    }, [allItems, currentPage, itemsPerPage]);

    const handleCurrentItems = (newCurrentPage: number) => {
        setCurrentPage(newCurrentPage);
    };

    const handleSearchItem = (query: string) => {
        if (!query) {
            setFilteredItems(null);
            setFilteredTotalItems(totalItems);
            return;
        }
        const results = (allItems ?? []).filter((item) => {
            return item.name && item.name.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredItems(results);
        setFilteredTotalItems(results.length);
    };

    const renderContent = () => {
        switch (type) {
            case 'grid':
                return (
                    <>
                        <Container>
                            <CategoryItemCount title={category} total={filteredTotalItems} />
                            <Search onSearchItem={handleSearchItem} />
                        </Container>
                        <ItemGrid data={displayedItems} renderItem={renderGridItem} />
                        <Pagination totalItems={filteredItems ? filteredTotalItems : totalItems} itemsPerPage={itemsPerPage} onPageChange={handleCurrentItems} />
                    </>
                )
            case 'table':
                return (
                    <CustomTable data={displayedItems || []} renderHeader={renderTableHeader} renderBody={renderTableBody} />
                )
        }
    }

    return (
        <>
            {errorMessage ? (
                <ApiError />
            ) : isLoading ? (
                <Loading />
            ) : (
                <>
                    {renderContent()}
                </>
            )}
        </>
    );
}