import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MenuItem from '@components/layout/navigation/MenuItem';
import ToggleThemeButton from '@components/layout/navigation/buttons/ToggleTheme';
import MobileMenuButton from '@components/layout/navigation/buttons/MobileMenu';
import useDarkMode from '@utils/useDarkMode';

interface MenuItemLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

interface NavbarProps {
    menuItems: MenuItemLink[];
}

const Navbar = ({ menuItems }: NavbarProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [colorTheme, setTheme] = useDarkMode();
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        setIsExpanded(false)
    }, [pathname])

    const menu = menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
    ));

    return (
        <header className='m-auto max-w-screen-lg py-12 px-4'>
            <nav className="border-gray-200 dark:bg-[#172136] dark:text-[#cbd9f4]">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center self-center text-2xl whitespace-nowrap">
                        <Link href="/">Sea Bass</Link>
                    </div>
                    <div className='flex items-center md:ml-auto md:mr-8'>
                        <ToggleThemeButton colorTheme={colorTheme} setTheme={setTheme} />
                        <MobileMenuButton onToggle={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
                    </div>
                    <div className={`${isExpanded ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="flex flex-row items-center justify-between mt-4 md:space-x-8 md:mt-0 md:text-sm text-right">
                            {menu}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
