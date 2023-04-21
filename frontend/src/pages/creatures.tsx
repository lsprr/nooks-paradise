import { fetchData } from '@/utils/api';
import { mergeAllArrays } from '@utils/arrayUtils';
import Filter from '@/components/Filter';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Card';
import acnhBells from '@assets/images/bells.png';
import acnhLocation from '@assets/images/location.png';
import northHemisphere from '@assets/images/north.png';
import southHemisphere from '@assets/images/south.png';

type Creature = {
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

    useEffect(() => {
        fetchData('creatures')
            .then((data) => {
                setDisplayedItems(mergeAllArrays(data));
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching creatures:', error);
            });
    }, []);

    const handleFilterKeywordChange = (value: string) => {
        setFilterKeyword(value);
    };

    const renderItem = (item: Creature) => (
        <Card
            secondaryImage={item.iconImage}
            primaryImage={item.critterpediaImage}
            name={item.name}
            infoElements={[
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
                    src: acnhBells,
                    alt: 'Selling price in Bells',
                    text: `${item.sell} Bells`,
                },
            ]}
        />
    );


    const renderFilters = () => {
        return (
            <div></div>
        );
    };


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