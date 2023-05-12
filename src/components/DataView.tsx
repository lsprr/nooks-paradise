import { useState, useEffect, useCallback, useContext } from "react";
import { ApiError } from "@/components/Error/ApiError";
import { Loading } from "@/components/Loading/Loading";
import { GridDataView } from "./GridDataView";
import { SearchContext } from "@/contexts/SearchContext";

type DataViewProps<T extends { name: string }> = {
    category: string;
    fetchFunction: (currentPage: number, itemsPerPage: number) => Promise<{ data: T[]; totalCount: number }>;
    renderGridItem: (item: T) => JSX.Element | null;
};

export const DataView = <T extends { name: string }>({ category, fetchFunction, renderGridItem, }: DataViewProps<T>) => {
    const [allItems, setAllItems] = useState<T[] | null>(null);
    const [visibleItems, setVisibleItems] = useState<T[] | null>(null);
    const [filteredItems, setFilteredItems] = useState<T[] | null>(null);
    const [totalItems, setTotalItems] = useState(0);
    const [filteredTotalItems, setFilteredTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<Error | null>(null);
    const itemsPerPage = 20;
    const { searchTerm } = useContext(SearchContext);

    const fetchAllDataInBackground = useCallback(async () => {
        try {
            const allData = await fetchFunction(1, 0);
            setAllItems(allData.data);
        } catch (error) {
            console.error(`Error fetching all ${category} data:`, error);
        }
    }, [category, fetchFunction]);

    const fetchData = useCallback(async (currentPage: number, itemsPerPage: number) => {
        try {
            const data = await fetchFunction(currentPage, itemsPerPage);
            setVisibleItems(data.data);
            setTotalItems(data.totalCount);
            setFilteredTotalItems(data.totalCount);
            setIsLoading(false);

            fetchAllDataInBackground();

        } catch (error) {
            setErrorMessage(new Error(`Error fetching data. Please try again.`));
            console.error(`Error fetching ${category}:`, error);
        }
    }, [category, fetchFunction, fetchAllDataInBackground]);

    useEffect(() => {
        fetchData(currentPage, itemsPerPage);
    }, [currentPage, itemsPerPage, fetchData]);

    const handleCurrentItems = (newCurrentPage: number) => {
        setCurrentPage(newCurrentPage);
    };

    const handleSearchItem = useCallback((query: string) => {
        if (!query) {
            setFilteredItems(null);
            setFilteredTotalItems(totalItems);
        } else {
            const results = (allItems ?? []).filter((item) => {
                return item.name && item.name.toLowerCase().includes(query.toLowerCase());
            });
            setFilteredItems(results);
            setFilteredTotalItems(results.length);
            setCurrentPage(1);
        }
    }, [allItems, totalItems]);

    useEffect(() => {
        handleSearchItem(searchTerm);
    }, [searchTerm, handleSearchItem]);

    const renderContent = () => {
        const sourceItems = filteredItems || visibleItems || [];

        return (
            <GridDataView
                category={category}
                totalItems={filteredTotalItems}
                sourceItems={sourceItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                handleSearchItem={handleSearchItem}
                handleCurrentItems={handleCurrentItems}
                renderGridItem={renderGridItem}
            />
        );
    };

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
};
