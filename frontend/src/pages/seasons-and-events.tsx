import { fetchData } from '@/utils/api';
import { mergeAllArrays } from '@utils/arrayUtils';
import { Filter } from '@/components/Filter';
import { useEffect, useState } from 'react';

type SeasonAndEvent = {

};

export default function SeasonsAndEvents() {
    const [displayedItems, setDisplayedItems] = useState<Array<any> | null>(null);
    const [filterKeyword, setFilterKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchData('seasonsandevents')
            .then((data) => {
                setDisplayedItems(mergeAllArrays(data));
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage('Error fetching Seasons and Events. Please try again.');
                console.error('Error fetching Seasons and Events:', error);
            });
    }, []);

    const handleFilterKeywordChange = (value: string) => {
        setFilterKeyword(value);
    };

    const renderItem = (item: SeasonAndEvent) => {
        return (

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