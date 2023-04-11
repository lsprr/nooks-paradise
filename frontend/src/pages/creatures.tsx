import { fetchData } from '@/utils/api';
import Filter from '@/components/Filter';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

    const renderItem = (item: any) => (
        <li key={item.name} className='bg-[#e7dfae] rounded'>
            <a href="#" className="group block overflow-hidden">
                <Image
                    src={item.iconImage}
                    alt={item.description[0]}
                    className="h-[350px] object-contain transition duration-500 group-hover:scale-105 m-auto"
                    width={100}
                    height={350}
                    loading='lazy'
                />
                <div className="relative bg-[#2F3939] dark:bg-[#F5EADD] p-3">
                    <h1
                        className="text-[#FAEADD] dark:text-[#2F3939] capitalize text-center"
                    >
                        {item.name}
                    </h1>
                </div>
            </a>
        </li>
    );

    const renderFilters = () => {
        return (
            <div>
                <p className="block text-[#2F3939] dark:text-[#F5EADD]">Filters</p>
                <div className="mt-1 space-y-2">
                    <div
                        className="bg-[#2F3939] dark:bg-[#F5EADD] overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <div className="flex items-center justify-between gap-2 p-4 text-white dark:text-[#2F3939] transition">
                            <span>Aquatic</span>
                        </div>
                        <div className="border-t border-gray-200 bg-[#F5EADD] dark:bg-[#2F3939]">
                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                <li>
                                    <label
                                        htmlFor="fish"
                                        className="inline-flex items-center gap-2 z-10"
                                        tabIndex={0}
                                        aria-label="fish"
                                    >
                                        <input
                                            type="radio"
                                            name="creatureType"
                                            id="fish"
                                            value="fish"
                                            className="h-5 w-5 rounded border-gray-300"
                                            onChange={() => handleDisplayedItemsChange('fish')}
                                            defaultChecked={true}
                                            tabIndex={0}
                                        />
                                        <span className="text-[#2F3939] dark:text-[#F5EADD]">
                                            Fish
                                        </span>
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="insects"
                                        className="inline-flex items-center gap-2 z-10"
                                        tabIndex={0}
                                        aria-label="insects"
                                    >
                                        <input
                                            type="radio"
                                            name="creatureType"
                                            id="insects"
                                            value="insects"
                                            className="h-5 w-5 rounded border-gray-300"
                                            onChange={() => handleDisplayedItemsChange('insects')}
                                            tabIndex={0}
                                        />
                                        <span className="text-[#2F3939] dark:text-[#F5EADD]">
                                            Insects
                                        </span>
                                    </label>
                                </li>
                                <li>
                                    <label
                                        htmlFor="seaCreatures"
                                        className="inline-flex items-center gap-2 z-10"
                                        tabIndex={0}
                                        aria-label="seaCreatures"
                                    >
                                        <input
                                            type="radio"
                                            name="creatureType"
                                            id="seaCreatures"
                                            value="seaCreatures"
                                            className="h-5 w-5 rounded border-gray-300"
                                            onChange={() => handleDisplayedItemsChange('seaCreatures')}
                                            tabIndex={0}
                                        />
                                        <span className="text-[#2F3939] dark:text-[#F5EADD]">
                                            Sea Creatures
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <Filter
            title={'Creatures'}
            displayedItems={displayedItems}
            filterKeyword={filterKeyword}
            onFilterKeywordChange={handleFilterKeywordChange}
            renderItem={renderItem}
            filters={renderFilters()}
        />
    );
}
