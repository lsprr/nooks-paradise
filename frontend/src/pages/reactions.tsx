import { fetchData } from '@/utils/api';
import { mergeAllArrays } from '@utils/arrayUtils';
import { Filter } from '@/components/Filter';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Card';
import acnhBg from '@assets/images/background.jpg';
import acnhQuestion from '@assets/images/question.png';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Reactions = {
    source: string;
    name: string;
    image: StaticImageData;
};

export default function Reactions() {
    const [displayedItems, setDisplayedItems] = useState<Array<any> | null>(null);
    const [filterKeyword, setFilterKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchData('reactions')
            .then((data) => {
                setDisplayedItems(mergeAllArrays(data));
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage('Error fetching Reactions. Please try again.');
                console.error('Error fetching Reactions:', error);
            });
    }, []);

    const handleFilterKeywordChange = (value: string) => {
        setFilterKeyword(value);
    };

    const renderItem = (item: Reactions) => {
        const infoElements = [
            {
                src: acnhQuestion,
                alt: 'How to get the source',
                text: `${item.source}`,
            },
        ];

        return (
            <Card
                name={item.name}
                image={item.image}
                backgroundImage={acnhBg}
                infoElements={infoElements}
            />
        );
    };

    const renderFilters = () => {
        return (
            <div></div>
        );
    };

    const FilteredItemsWithLoadingIndicator = () => {
        if (errorMessage) {
            return (
                <div className="text-red-500 flex justify-center">
                    {errorMessage}
                </div>
            );
        } else {
            return (
                <>
                    {isLoading ? (
                        <div className="flex items-center justify-center space-x-2 animate-bounce">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div>
                    ) : (
                        <Filter
                            displayedItems={displayedItems}
                            filterKeyword={filterKeyword}
                            onFilterKeywordChange={handleFilterKeywordChange}
                            renderItem={renderItem}
                            filters={renderFilters()}
                        />
                    )}
                </>
            );
        }
    }

    return (
        <>
            {FilteredItemsWithLoadingIndicator()}
        </>
    );
}