import Link, { LinkProps } from 'next/link';
type MenuItemProps = {
    label: string;
    href: string;
    isExternal?: boolean;
    active: boolean;
    onLinkClick?: () => void;
    mobile?: boolean;
};

export const MenuItem = ({ label, href, isExternal, active, onLinkClick, mobile }: MenuItemProps) => {
    const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps = {
        href,
        className: `text-base text-center text-darkGray capitalize ${mobile ? 'h-full block relative top-0 rounded-3xl px-4 py-5 text-center' : 'block relative top-0 text-center flex items-center flex-col'}`,
        'aria-label': `${label} page`,
        onClick: onLinkClick ? () => onLinkClick() : undefined,
    };

    if (isExternal) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }

    return (
        <>
            {mobile ? (
                <li className='list-none'>
                    <Link {...linkProps}>
                        {label}
                    </Link>
                </li>
            ) : (
                <li>
                    <Link {...linkProps}>
                        {label}
                    </Link>
                </li>
            )}
        </>
    );
};
