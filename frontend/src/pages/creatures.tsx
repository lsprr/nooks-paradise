import { fetchData } from '@/utils/api';
import { mergeAllArrays } from '@utils/arrayUtils';
import Filter from '@/components/Filter';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Card';
import acnhLocation from '@assets/images/location.png';
import northHemisphere from '@assets/images/north.png';
import southHemisphere from '@assets/images/south.png';
import acnhCranny from '@assets/images/cranny.png';
import acnhFlick from '@assets/images/flick.png';
import acnhCJ from '@assets/images/cj.png';

type Creature = {
    sourceSheet: string;
    iconImage: string;
    critterpediaImage: string;
    name: string;
    hemispheres: {
        north: { months: string[]; time: string[] };
        south: { months: string[]; time: string[] };
    };
    whereHow: string;
    sell: number;
};

export default function Creatures() {
    const [displayedItems, setDisplayedItems] = useState<Array<any> | null>(null);
    const [filterKeyword, setFilterKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchData('creatures')
            .then((data) => {
                setDisplayedItems(mergeAllArrays(data));
                setIsLoading(false);
            })
            .catch((error) => {
                setErrorMessage('Error fetching creatures. Please try again.');
                console.error('Error fetching creatures:', error);
            });
    }, []);

    const handleFilterKeywordChange = (value: string) => {
        setFilterKeyword(value);
    };

    const renderItem = (item: Creature) => {
        const infoElements = [
            {
                src: northHemisphere,
                alt: 'North Hemisphere availability',
                text: `${item.hemispheres.north.months[0]} (${item.hemispheres.north.time[0]})`,
            },
            {
                src: southHemisphere,
                alt: 'South Hemisphere availability',
                text: `${item.hemispheres.south.months[0]} (${item.hemispheres.south.time[0]})`,
            },
            {
                src: acnhLocation,
                alt: 'Location and method of capture',
                text: item.whereHow,
            },
            {
                src: acnhCranny,
                alt: 'Selling price in Bells',
                text: `${item.sell} Bells`,
            },
        ];

        if (item.sourceSheet === 'Insects') {
            infoElements.push({
                src: acnhFlick,
                alt: 'Selling price * 1.5 in Bells to Flick',
                text: `${item.sell * 1.5} Bells`,
            });
        } else if (item.sourceSheet === 'Fish') {
            infoElements.push({
                src: acnhCJ,
                alt: 'Selling price * 1.5 in Bells to C.J',
                text: `${item.sell * 1.5} Bells`,
            });
        }

        return (
            <Card
                secondaryImage={item.iconImage}
                primaryImage={item.critterpediaImage}
                name={item.name}
                infoElements={infoElements}
            />
        );
    };

    const renderFilters = () => {
        return (
            <div></div>
        );
    };

    const FilterWithLoadingIndicator = () => {
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
            {FilterWithLoadingIndicator()}
        </>
    );
}