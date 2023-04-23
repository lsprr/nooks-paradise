import Link, { LinkProps } from 'next/link';

type MenuItem = {
    label: string;
    href: string;
    isExternal?: boolean;
    active: boolean;
}

export const MenuItem = ({ label, href, isExternal, active }: MenuItem) => {
    const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps = {
        href,
        className: `text-xl whitespace-nowrap ${active ? 'block border-b-4 border-[#78512C] dark:border-[#A0CDA2]' : ''}`,
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
