import { fetchData } from '@/utils/api';
import { mergeAllArrays } from '@utils/arrayUtils';
import { useEffect, useState } from 'react';
import { ItemGrids } from '@/components/ItemGrids';
import { Card } from '@/components/Card';
import { ErrorAPI } from '@/components/Errors/API';
import { Loading } from '@/components/Loading';
import { Pagination } from '@/components/Pagination';
import { Summary } from '@/components/Summary';
import question from '@assets/images/questionMark.png';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Item = {
    name: string;
    image: StaticImageData;
};

type DataFetchProps = {
    category: string;
};

const DataFetch = ({ category }: DataFetchProps) => {
    const [displayedItems, setDisplayedItems] = useState<Array<Item> | null>(null);
    const [currentItems, setCurrentItems] = useState<Array<Item> | null>(null);
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

    const renderItem = (item: Item) => {

        const isImageExist = () => {
            if (item.image) {
                return item.image
            } else {
                return question;
            }
        }

        return (
            <Card
                name={item.name}
                image={isImageExist()}
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
                <>
                    <Summary category={category} data={displayedItems} />
                    <ItemGrids data={currentItems} renderItem={renderItem} />
                    <Pagination data={displayedItems} setCurrentItems={setCurrentItems} />
                </>
            )}
        </>
    );
}

export default function Items() {
    return <DataFetch category="items" />;
}