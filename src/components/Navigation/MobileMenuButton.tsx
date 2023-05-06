type MobileMenuProps = {
    onToggle: () => void;
    isExpanded: boolean;
}

export const MobileMenuButton = ({ onToggle, isExpanded }: MobileMenuProps) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="rounded p-2 text-gray-600 transition hover:text-gray-600/75"
            aria-expanded={isExpanded}
            aria-controls="navbar-default"
        >
            <span className="sr-only">Open main menu</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5">
                {isExpanded ? (
                    <>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </>
                ) : (
                    <>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </>
                )}
            </svg>
        </button>
    );
};