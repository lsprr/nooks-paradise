import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Wilbur from '@assets/brand/logo.png';
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
            <nav className="border-gray-200">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center self-center text-2xl whitespace-nowrap z-20">
                        <Link href="/">
                            <Image src={Wilbur} alt='Wilbur' width={75} height={75} />
                        </Link>
                    </div>
                    <div className='flex items-center md:ml-auto md:mr-8 transition-all duration-300'>
                        <ToggleThemeButton colorTheme={colorTheme} setTheme={setTheme} />
                        <MobileMenuButton onToggle={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
                    </div>
                    <div className={`${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} fixed inset-0 z-10 bg-[#F5EADD] dark:bg-[#2F3939] flex items-center justify-center transition-all duration-300`} id="navbar-default">
                        <ul className="flex flex-col space-y-4">
                            {menu}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
