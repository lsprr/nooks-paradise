import { useState, useEffect } from "react";
import { ApiError } from "@/components/Error/ApiError";
import { Loading } from "@/components/Loading/Loading";
import { CategoryItemCount } from "@/components/CategoryItemCount/CategoryItemCount";
import { ItemGrid } from "@/components/ItemGrid/ItemGrid";
import { Pagination } from "@/components/Pagination/Pagination";
import { CustomTable } from "@/components/Table/CustomTable";
import { Search } from "@/components/Search/Search";

type DataFetchProps = {
    category: string;
    type: "grid" | "table";
    fetchFunction: () => Promise<any>;
    renderGridItem?: (item: any) => JSX.Element;
    renderTableHeader?: () => JSX.Element;
    renderTableBody?: (item: any, index: number) => JSX.Element;
};

export const DataFetch = ({ category, type, fetchFunction, renderGridItem, renderTableHeader, renderTableBody }: DataFetchProps) => {
    const [displayedItems, setDisplayedItems] = useState<Array<any> | null>(null);
    const [filteredItems, setFilteredItems] = useState<Array<any> | null>(null);
    const [currentItems, setCurrentItems] = useState<Array<any> | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<Error | null>(null);

    useEffect(() => {
        fetchFunction()
            .then((data) => {
                setDisplayedItems(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage(new Error(`Error fetching data. Please try again.`));
                console.error(`Error fetching ${category}:`, error);
            });
    }, [category, fetchFunction]);


    const handleCurrentItems = (newCurrentItems: Array<any> | null) => {
        setCurrentItems(newCurrentItems);
    };

    const handleSearchItem = (query: string) => {
        if (!query) {
            setFilteredItems(null);
            return;
        }
        const results = (displayedItems ?? []).filter((item) => {
            return item.name && item.name.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredItems(results);
    };

    const renderContent = () => {
        const itemsToDisplay = filteredItems || displayedItems;

        switch (type) {
            case 'grid':
                return (
                    <>
                        <CategoryItemCount data={itemsToDisplay} title={category} />
                        <Search onSearchItem={handleSearchItem} />
                        <ItemGrid data={currentItems} renderItem={renderGridItem} />
                        <Pagination data={itemsToDisplay} setCurrentItems={handleCurrentItems} />
                    </>
                )
            case 'table':
                return (
                    <CustomTable data={itemsToDisplay || []} renderHeader={renderTableHeader} renderBody={renderTableBody} />
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