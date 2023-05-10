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
        className: `${mobile ? 'h-full transition-all ease-in-out duration-300 block relative top-0 rounded-3xl px-4 py-5 text-center group hover:bg-limeGreen hover:-top-1' : 'block relative top-0 text-center flex items-center flex-col'}`,
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
                        <h3 className="text-base text-center text-darkGray capitalize">{label}</h3>
                    </Link>
                </li>
            ) : (
                <li>
                    <Link {...linkProps}>
                        <h3 className="text-base text-center text-darkGray capitalize">{label}</h3>
                    </Link>
                </li>
            )}
        </>
    );
};
