import { fetchData } from '@/utils/api';
import { useEffect, useState } from 'react';
import { ItemGrid } from '@/components/ItemGrid/ItemGrid';
import { Card } from '@/components/Card/Card';
import { ApiError } from '@/components/Error/ApiError';
import { Loading } from '@/components/Loading/Loading';
import { Pagination } from '@/components/Pagination/Pagination';
import { CategoryItemCount } from '@/components/CategoryItemCount/CategoryItemCount';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Creature = {
    name: string;
    critterpediaImage: StaticImageData;
};

type DataFetchProps = {
    category: string;
};

const DataFetch = ({ category }: DataFetchProps) => {
    const [displayedItems, setDisplayedItems] = useState<Array<Creature> | null>(null);
    const [currentItems, setCurrentItems] = useState<Array<Creature> | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<Error | null>(null);

    useEffect(() => {
        fetchData(category)
            .then((data) => {
                setDisplayedItems(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage(new Error(`Error fetching data. Please try again.`));
                console.error(`Error fetching ${category.toUpperCase}:`, error);
            });
    }, [category]);

    const renderItem = (item: Creature) => {
        return (
            <Card
                name={item.name}
                image={item.critterpediaImage}
            />
        );
    };

    const handleCurrentItems = (newCurrentItems: Array<Creature> | null) => {
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
                    <CategoryItemCount category={category} data={displayedItems} />
                    <ItemGrid data={currentItems} renderItem={renderItem} />
                    <Pagination data={displayedItems} setCurrentItems={handleCurrentItems} />
                </>
            )}
        </>
    );
}

export default function Creatures() {
    return <DataFetch category="creatures" />;
}