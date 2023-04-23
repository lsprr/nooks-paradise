import { fetchData } from '@/utils/api';
import { mergeAllArrays } from '@utils/arrayUtils';
import { toCommas } from '@/utils/numberWithCommas';
import Filter from '@/components/Filter';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Card';
import acnhBg from '@assets/images/background.jpg';
import acnhQuestion from '@assets/images/question.png';
import acnhResidentService from '@assets/images/services.png';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Creature = {
    name: string;
    image: StaticImageData;
    source: string;
    buy: number;
};

export default function Construction() {
    const [displayedItems, setDisplayedItems] = useState<Array<any> | null>(null);
    const [filterKeyword, setFilterKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchData('construction')
            .then((data) => {
                setDisplayedItems(mergeAllArrays(data));
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage('Error fetching construction. Please try again.');
                console.error('Error fetching construction:', error);
            });
    }, []);

    const handleFilterKeywordChange = (value: string) => {
        setFilterKeyword(value);
    };

    const renderItem = (item: Creature) => {

        if (!item.name && !item.source) {
            return null;
        }

        const infoElements = [
            {
                src: acnhQuestion,
                alt: 'How to get the source',
                text: `${item.source}`,
            },
            {
                src: acnhResidentService,
                alt: 'Buying price in Bells',
                text: `${toCommas(item.buy)} Bells`,
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