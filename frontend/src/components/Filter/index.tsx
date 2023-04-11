import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
    title: string;
    whichItem: Array<any> | null;
    findItem: string;
    onFindItemChange: Function;
    onWhichItemChange: Function;
};


const Filter = ({ title, whichItem, findItem, onFindItemChange, onWhichItemChange }: Props) => {
    const [filteredItems, setFilteredItems] = useState(whichItem);

    useEffect(() => {
        if (whichItem && findItem) {
            const filtered = whichItem.filter((creature: any) =>
                creature.name.toLowerCase().includes(findItem.toLowerCase()),
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems(whichItem);
        }
    }, [whichItem, findItem]);

    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

                    <header>
                        <h1 className="text-xl font-bold text-[#2F3939] dark:text-[#F5EADD] sm:text-3xl">
                            {title}
                        </h1>
                    </header>

                    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                        <div className="space-y-4 mb-5">

                            <div>
                                <label className="sr-only" htmlFor="search">Search</label>
                                <input
                                    className="w-full rounded  border-gray-200 p-3"
                                    placeholder="Search"
                                    type="text"
                                    id="search"
                                    onChange={(e) => onFindItemChange(e.target.value)}
                                />
                            </div>

                            <div>
                                <p className="block text-[#2F3939] dark:text-[#F5EADD]">Filters</p>
                                <div className="mt-1 space-y-2">
                                    <div
                                        className="bg-[#2F3939] dark:bg-[#F5EADD] overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden" open
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
                                                            onChange={() => onWhichItemChange('fish')}
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
                                                            onChange={() => onWhichItemChange('insects')}
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
                                                            onChange={() => onWhichItemChange('seaCreatures')}
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
                        </div>

                        <div className="lg:col-span-3">
                            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredItems?.map((item) => (
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
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Filter;