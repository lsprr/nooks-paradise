interface MobileMenu {
    onToggle: () => void;
    isExpanded: boolean;
}

const MobileMenuButton = ({ onToggle, isExpanded }: MobileMenu) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black ml-2 dark:focus:ring-white"
            aria-expanded={isExpanded}
            aria-controls="mobile-menu"
        >
            <span className="sr-only">Open main menu</span>
            {isExpanded ? (
                <svg
                    className="block h-6 w-6 stroke-[#cbd9f4]"
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
                        className='stroke-black dark:stroke-[#cbd9f4]'
                    />
                </svg>
            ) : (
                <svg
                    className="block h-6 w-6 stroke-black"
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
                        className='stroke-black dark:stroke-[#cbd9f4]'
                    />
                </svg>
            )}
        </button>
    );
};

export default MobileMenuButton;
