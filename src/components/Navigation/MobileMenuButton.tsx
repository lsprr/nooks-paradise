type MobileMenuProps = {
    onToggle: () => void;
    isExpanded: boolean;
}

export const MobileMenuButton = ({ onToggle, isExpanded }: MobileMenuProps) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2F3939] ml-2 dark:focus:ring-[#f8f8f0] z-20"
            aria-expanded={isExpanded}
            aria-controls="navbar-default"
        >
            <span className="sr-only">Open main menu</span>
            {isExpanded ? (
                <svg
                    className="block h-6 w-6 transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        className='stroke-[#2F3939] dark:stroke-[#f8f8f0] transition-all duration-300'
                    />
                </svg>
            ) : (
                <svg
                    className="block h-6 w-6 transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                        className='stroke-[#2F3939] dark:stroke-[#f8f8f0] transition-all duration-300'
                    />
                </svg>
            )}
        </button>
    );
};