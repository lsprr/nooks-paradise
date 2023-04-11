import { useEffect, useState } from 'react';

type Props = {
    title: string;
    displayedItems: Array<any> | null;
    filterKeyword: string;
    onFilterKeywordChange: Function;
    renderItem: (item: any) => JSX.Element;
    filters: JSX.Element;
};

const Filter = ({ title, displayedItems, filterKeyword, onFilterKeywordChange, renderItem, filters }: Props) => {
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
                                    onChange={(e) => onFilterKeywordChange(e.target.value)}
                                />
                            </div>
                            {filters}
                        </div>
                        <div className="lg:col-span-3">
                            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredItems?.map((item) => renderItem(item))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Filter;
