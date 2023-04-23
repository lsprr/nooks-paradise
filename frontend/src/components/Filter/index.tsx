import { useEffect, useState } from 'react';

type Props = {
    displayedItems: Array<any> | null,
    filterKeyword: string,
    onFilterKeywordChange: Function,
    renderItem: (item: any) => JSX.Element | null;
    filters: JSX.Element,
};

export const Filter = ({ displayedItems, filterKeyword, onFilterKeywordChange, renderItem, filters }: Props) => {
    const [filteredItems, setFilteredItems] = useState(displayedItems);

    useEffect(() => {
        if (!displayedItems) {
            setFilteredItems(null);
            return;
        }

        if (filterKeyword === '') {
            setFilteredItems(displayedItems);
            return;
        }

        const filtered = displayedItems.filter((item) =>
            item.name.toLowerCase().includes(filterKeyword.toLowerCase())
        );

        setFilteredItems(filtered);
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
                            {filteredItems?.length ? (
                                filteredItems.flatMap((item, index) => {
                                    const renderedItem = renderItem(item);
                                    return renderedItem ? (
                                        <li className='rounded relative' key={index}>{renderedItem}</li>
                                    ) : [];
                                })
                            ) : (
                                <p className="text-center w-full">No items found.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

        </>
    );
};