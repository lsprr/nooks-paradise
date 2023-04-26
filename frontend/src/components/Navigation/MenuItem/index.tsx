import Link, { LinkProps } from 'next/link';

type MenuItemProps = {
    label: string;
    href: string;
    isExternal?: boolean;
    active: boolean;
}

export const MenuItem = ({ label, href, isExternal, active }: MenuItemProps) => {
    const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps = {
        href,
        className: `text-xl whitespace-nowrap text-darkGray dark:text-creamWhite ${active ? 'block border-b-4 border-[#017069] dark:border-[#e9f4ec]' : ''}`,
        'aria-label': `${label} page`,
    };

    if (isExternal) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }

    return (
        <li>
            <Link {...linkProps}>
                {label}
            </Link>
        </li>
    );
};
