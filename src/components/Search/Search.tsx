type SearchProps = {
    onSearchItem: (query: string) => void;
}

export const Search = ({ onSearchItem }: SearchProps) => {
    return (
        <div className="flex items-end justify-between bg-white p-6 mt-8 rounded-2xl md:w-1/3">
            <label
                htmlFor="search"
                className="w-full overflow-hidden border-gray-200 shadow-sm border border-1-darkGray focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 flex flex-col items-center h-full rounded-2xl"
            >
                <span className="text-base text-darkGray capitalize">Search</span>

                <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    onChange={(e) => onSearchItem(e.target.value)}
                    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 text-sm text-darkGray text-center"
                />
            </label>
        </div>
    )
}