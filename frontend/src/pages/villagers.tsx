import { fetchData } from '@/utils/api';
import { mergeAllArrays } from '@utils/arrayUtils';
import { useEffect, useState } from 'react';
import { ItemGrids } from '@/components/ItemGrids';
import { Card } from '@/components/Card';
import { ErrorAPI } from '@/components/Errors/API';
import { Loading } from '@/components/Loading';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Village = {
    name: string;
    iconImage: StaticImageData;
};

type DataFetchProps = {
    category: string;
};

const DataFetch = ({ category }: DataFetchProps) => {
    const [displayedItems, setDisplayedItems] = useState<Array<Village> | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<Error | null>(null);

    useEffect(() => {
        fetchData(category)
            .then((data) => {
                setDisplayedItems(mergeAllArrays(data));
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage(new Error(`Error fetching data. Please try again.`));
                console.error(`Error fetching ${category.toUpperCase}:`, error);
            });
    }, [category]);

    const renderItem = (item: Village) => {
        return (
            <Card
                name={item.name}
                image={item.iconImage}
            />
        );
    };

    return (
        <>
            {errorMessage ? (
                <ErrorAPI />
            ) : isLoading ? (
                <Loading />
            ) : (
                <ItemGrids data={displayedItems} renderItem={renderItem} />
            )}
        </>
    );
}

export default function Villagers() {
    return <DataFetch category="villagers" />;
}
