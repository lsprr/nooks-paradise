import Link, { LinkProps } from 'next/link';

interface MenuItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

const MenuItem = ({ label, href, isExternal }: MenuItem) => {
    const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps = {
        href,
        className: 'text-xl whitespace-nowrap',
        'aria-label': `${label} page`,
    };

    if (isExternal) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }

    return (
        <li>
            <Link {...linkProps}>{label}</Link>
        </li>
    );
};

export default MenuItem;
