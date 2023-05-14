import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { MenuItem } from '@/components/NavigationMenuItem';
import { ToggleThemeButton } from '@/components/ToggleThemeButton';
import { MobileMenuButton } from '@/components/MobileMenuButton';
import { useDarkMode } from '@hooks/useDarkMode';
import logo from '@assets/brand/logo.webp';

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

    const closeMenuIfDifferentLink = (linkHref: string) => {
        if (pathname !== linkHref) {
            setIsExpanded(false);
        }
    };

    const menuDesktop = menuItems.map((item) => (
        <MenuItem key={item.href} {...item} active={pathname === item.href} />
    ));

    const menuMobile = menuItems.map((item) => (
        <MenuItem key={item.href} {...item} active={pathname === item.href} onLinkClick={() => closeMenuIfDifferentLink(item.href)} mobile />
    ));

    return (
        <>
            <header aria-label="Site Header" className="z-50 sticky top-0 container mx-auto mt-10 mb-10">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col w-full md:flex-row">
                    <div className="flex h-16 items-center justify-space w-full bg-creamWhite rounded-2xl pl-4 pr-4">
                        <Link className="block text-teal-600 z-[100]" href="/">
                            <span className="sr-only">Home</span>
                            <Image src={logo} alt="logo" className='h-14 w-auto' />
                        </Link>
                        <div className="flex flex-1 items-center justify-end">
                            <nav aria-label="Site Nav" className="hidden lg:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    {menuDesktop}
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4 z-[100]">
                                {/* <div className="flex sm:gap-4 items-center">
                                    <ToggleThemeButton colorTheme={colorTheme} setTheme={setTheme} />
                                </div> */}

                                <div className="block lg:hidden">
                                    <MobileMenuButton onToggle={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
                                </div>
                            </div>
                        </div>

                        <CSSTransition
                            in={isExpanded}
                            timeout={300}
                            classNames="menu-transition"
                            unmountOnExit
                            nodeRef={menuRef}
                        >
                            <div className="block lg:hidden fixed inset-0 pt-20 bg-creamWhite z-50">
                                <div className="container mx-auto px-4 transition-all ease-in-out duration-300 flex justify-center items-center overflow-auto impt-h">
                                    <div className="max-w-6xl transition-all ease-in-out duration-300 impt-h">
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10 mt-10">
                                            {menuMobile}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>

                    </div>
                </div>
            </header>
        </>
    );
};