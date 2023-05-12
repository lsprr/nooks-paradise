type SearchProps = {
    onSearchItem: (query: string) => void;
}

export const Search = ({ onSearchItem }: SearchProps) => {
    return (
        <div className="max-sm:w-full">
            <label htmlFor="search" className="sr-only">Email</label>

            <div className="relative">
                <input
                    type="input"
                    onChange={(e) => onSearchItem(e.target.value)}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 shadow-sm bg-creamWhite text-base"
                    placeholder="Search"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-darkGray">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </span>
            </div>
        </div>
    )
}