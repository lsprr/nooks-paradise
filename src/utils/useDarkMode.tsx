import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useDarkMode = (): [Theme, () => void] => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'light') {
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
        }

    }, [theme]);

    const toggleTheme = (): void => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return [theme, toggleTheme];
};

export default useDarkMode;