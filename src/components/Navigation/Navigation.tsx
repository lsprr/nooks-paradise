import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Wilbur from '@assets/brand/logo.png';
import { MenuItem } from '@/components/Navigation/NavigationMenuItem';
import { ToggleThemeButton } from '@/components/Navigation/ToggleThemeButton';
import { MobileMenuButton } from '@/components/Navigation/MobileMenuButton';
import { useDarkMode } from '@hooks/useDarkMode';
import { NavigationCategoryList } from './NavigationCategoryList';

type MenuItemLink = {
    label: string;
    href: string;
    isExternal?: boolean;
}

type NavbarProps = {
    menuItems: MenuItemLink[];
}

export const Navigation = ({ menuItems }: NavbarProps) => {
    const menuRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [colorTheme, setTheme] = useDarkMode();
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        setIsExpanded(false)
    }, [pathname])

    const closeMenuIfActive = (isActive: boolean) => {
        if (isActive) {
            setIsExpanded(false);
        }
    };

    const menu = menuItems.map((item) => (
        <MenuItem key={item.href} {...item} active={pathname === item.href} onLinkClick={() => closeMenuIfActive(pathname === item.href)} />
    ));

    return (
        <>
            <header className="bg-white shadow-lg h-24 flex sticky top-0 z-[100] justify-between">
                <Link href="/" className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
                    <Image className="w-20 h-20" src={Wilbur} alt="logo" />
                </Link>
                <div className="flex items-center px-4 lg:px-6 xl:px-8">
                    {/* <ToggleThemeButton colorTheme={colorTheme} setTheme={setTheme} /> */}
                    <MobileMenuButton onToggle={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
                </div>
            </header>
            <CSSTransition
                in={isExpanded}
                timeout={300}
                classNames="menu-transition"
                unmountOnExit
                nodeRef={menuRef}
            >
                <NavigationCategoryList>{menu}</NavigationCategoryList>
            </CSSTransition>
        </>
    );
};