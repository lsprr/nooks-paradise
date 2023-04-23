import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Wilbur from '@assets/brand/logo.png';
import { MenuItem } from '@components/navigation/MenuItem';
import { ToggleThemeButton } from '@components/navigation/buttons/ToggleTheme';
import { MobileMenuButton } from '@components/navigation/buttons/MobileMenu';
import useDarkMode from '@utils/useDarkMode';

type MenuItemLink = {
    label: string;
    href: string;
    isExternal?: boolean;
}

type NavbarProps = {
    menuItems: MenuItemLink[];
}

export const Navbar = ({ menuItems }: NavbarProps) => {
    const menuRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [colorTheme, setTheme] = useDarkMode();
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        setIsExpanded(false)
    }, [pathname])

    const menu = menuItems.map((item) => (
        <MenuItem key={item.href} {...item} active={pathname === item.href} />
    ));

    return (
        <header className='m-auto py-12 px-4'>
            <nav className="border-gray-200">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <div className="flex items-center self-center text-2xl whitespace-nowrap z-20">
                        <Link href="/">
                            <Image src={Wilbur} alt='Wilbur' className='w-[80px] h-[75px]' />
                        </Link>
                    </div>
                    <div className='flex items-center md:ml-auto transition-all duration-300'>
                        <ToggleThemeButton colorTheme={colorTheme} setTheme={setTheme} />
                        <MobileMenuButton onToggle={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
                    </div>
                    <CSSTransition
                        in={isExpanded}
                        timeout={300}
                        classNames="menu-transition"
                        unmountOnExit
                        nodeRef={menuRef}
                    >
                        <div
                            className={`fixed inset-0 z-10 bg-[#F5EADD] dark:bg-[#2F3939] flex items-center justify-center`}
                            id="navbar-default"
                        >
                            <ul ref={menuRef} className="flex flex-col space-y-4">{menu}</ul>
                        </div>
                    </CSSTransition>
                </div>
            </nav>
        </header>
    );
};