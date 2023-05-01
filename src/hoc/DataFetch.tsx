import { useState, useEffect } from "react";
import { ApiError } from "@/components/Error/ApiError";
import { Loading } from "@/components/Loading/Loading";
import { CategoryItemCount } from "@/components/CategoryItemCount/CategoryItemCount";
import { ItemGrid } from "@/components/ItemGrid/ItemGrid";
import { Pagination } from "@/components/Pagination/Pagination";

type DataFetchProps = {
    category: string;
    fetchFunction: () => Promise<any>;
    renderItem: (item: any) => JSX.Element;
};

export const DataFetch = ({ category, fetchFunction, renderItem }: DataFetchProps) => {
    const [displayedItems, setDisplayedItems] = useState<Array<any> | null>(null);
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

    return (
        <>
            {errorMessage ? (
                <ApiError />
            ) : isLoading ? (
                <Loading />
            ) : (
                <>
                    <CategoryItemCount data={displayedItems} title={category} />
                    <ItemGrid data={currentItems} renderItem={renderItem} />
                    <Pagination data={displayedItems} setCurrentItems={handleCurrentItems} />
                </>
            )}
        </>
    );
}