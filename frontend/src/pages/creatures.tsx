import { fetchData } from '@/utils/api';
import Filter from '@/components/Filter';
import { useEffect, useState } from 'react';

export default function Creatures() {
    const [fish, setFish] = useState(null);
    const [insects, setInsects] = useState(null);
    const [seaCreatures, setSeaCreatures] = useState(null);
    const [displayedItems, setDisplayedItems] = useState<Array<any> | null>(null);
    const [filterKeyword, setFilterKeyword] = useState('');

    useEffect(() => {
        fetchData('creatures')
            .then((data) => {
                setFish(data['Fish']);
                setInsects(data['Insects']);
                setSeaCreatures(data['Sea Creatures']);
                setDisplayedItems(data['Fish']);
            })
            .catch((error) => {
                console.error('Error fetching creatures:', error);
            });
    }, []);

    const handleFilterKeywordChange = (value: string) => {
        setFilterKeyword(value);
    };

    const handleDisplayedItemsChange = (value: string) => {
        switch (value) {
            case 'fish':
                setDisplayedItems(fish);
                break;
            case 'insects':
                setDisplayedItems(insects);
                break;
            case 'seaCreatures':
                setDisplayedItems(seaCreatures);
                break;
            default:
                setDisplayedItems(fish);
        }
    };

    return (
        <Filter
            title={'Creatures'}
            displayedItems={displayedItems}
            filterKeyword={filterKeyword}
            onFilterKeywordChange={handleFilterKeywordChange}
            onDisplayedItemsChange={handleDisplayedItemsChange}
        />
    );
}
