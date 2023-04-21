import { useEffect, useState } from 'react';

type Props = {
    displayedItems: Array<any> | null,
    filterKeyword: string,
    onFilterKeywordChange: Function,
    renderItem: (item: any) => JSX.Element,
    filters: JSX.Element,
};

const Filter = ({ displayedItems, filterKeyword, onFilterKeywordChange, renderItem, filters }: Props) => {
    const [filteredItems, setFilteredItems] = useState(displayedItems);

    useEffect(() => {
        if (displayedItems && filterKeyword) {
            const filtered = displayedItems.filter((item: any) =>
                item.name.toLowerCase().includes(filterKeyword.toLowerCase()),
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems(displayedItems);
        }
    }, [displayedItems, filterKeyword]);

    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    {/* <header>
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            {title}
                        </h1>
                    </header> */}

                    {/* <div className="mt-8 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <label className="sr-only" htmlFor="search">Search</label>
                            <input
                                className="w-full rounded  border-gray-200 p-3"
                                placeholder="Search"
                                type="text"
                                id="search"
                                onChange={(e) => onFilterKeywordChange(e.target.value)}
                            />
                        </div>
                        {filters}
                    </div> */}

                    <div className="lg:col-span-4">
                        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {filteredItems?.map((item, index) =>
                                <li className='rounded relative' key={index}>{renderItem(item)}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Filter;
