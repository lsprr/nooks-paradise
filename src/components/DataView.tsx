import { useState, useEffect, useCallback } from "react";
import { ApiError } from "@/components/Error/ApiError";
import { Loading } from "@/components/Loading/Loading";
import { GridDataView } from "./GridDataView";
import { TableDataView } from "./TableDataView";

type DataViewProps = {
    category: string;
    viewType: "grid" | "table";
    fetchFunction: (currentPage: number, itemsPerPage: number) => Promise<any>;
    renderGridItem?: (item: any) => JSX.Element | null;
    renderTableHeader?: () => JSX.Element;
    renderTableBody?: (item: any, index: number) => JSX.Element;
};

export const DataView = ({
    category,
    viewType,
    fetchFunction,
    renderGridItem,
    renderTableHeader,
    renderTableBody,
}: DataViewProps) => {
    const [allItems, setAllItems] = useState<Array<any> | null>(null);
    const [visibleItems, setVisibleItems] = useState<Array<any> | null>(null);
    const [filteredItems, setFilteredItems] = useState<Array<any> | null>(null);
    const [totalItems, setTotalItems] = useState(0);
    const [filteredTotalItems, setFilteredTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<Error | null>(null);
    const itemsPerPage = 20;

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

    const handleSearchItem = (query: string) => {
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
    };

    const renderContent = () => {
        const sourceItems = filteredItems || visibleItems || [];

        switch (viewType) {
            case 'grid':
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
            case 'table':
                return <TableDataView allItems={allItems} renderTableHeader={renderTableHeader} renderTableBody={renderTableBody} />;
        }
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
