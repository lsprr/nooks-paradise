type ToggleTheme = {
    colorTheme: string;
    setTheme: () => void;
}

export const ToggleThemeButton = ({ colorTheme, setTheme }: ToggleTheme) => {
    return (
        <button
            onClick={() => setTheme()}
            aria-label="toggle theme"
            className="w-[1.8rem] h-[1.8rem] z-20 transition-all duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                {colorTheme === "light" ? (
                    <>
                        <path d="M17 18a5 5 0 0 0-10 0"></path>
                        <line x1="12" y1="2" x2="12" y2="9"></line>
                        <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
                        <line x1="1" y1="18" x2="3" y2="18"></line>
                        <line x1="21" y1="18" x2="23" y2="18"></line>
                        <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
                        <line x1="23" y1="22" x2="1" y2="22"></line>
                        <polyline points="8 6 12 2 16 6"></polyline>
                    </>
                ) : (
                    <>
                        <path d="M17 18a5 5 0 0 0-10 0"></path>
                        <line x1="12" y1="9" x2="12" y2="2"></line>
                        <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
                        <line x1="1" y1="18" x2="3" y2="18"></line>
                        <line x1="21" y1="18" x2="23" y2="18"></line>
                        <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
                        <line x1="23" y1="22" x2="1" y2="22"></line>
                        <polyline points="16 5 12 9 8 5"></polyline>
                    </>
                )}
            </svg>
        </button>
    );
};