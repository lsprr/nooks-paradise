import Link, { LinkProps } from 'next/link';
import Image from 'next/image';
import achievements from '@assets/images/categories/achievements.png';
import construction from '@assets/images/categories/construction.png';
import creatures from '@assets/images/categories/creatures.png';
import home from '@assets/images/categories/home.png';
import items from '@assets/images/categories/items.png';
import reactions from '@assets/images/categories/reactions.png';
import recipes from '@assets/images/categories/recipes.png';
import seasonsAndEvents from '@assets/images/categories/seasons-and-events.png';
import npcs from '@assets/images/categories/npcs.png';
import villagers from '@assets/images/categories/villagers.png';

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
        className: `${mobile ? 'h-full transition-all ease-in-out duration-300 block relative top-0 rounded-3xl px-4 py-5 text-center group hover:bg-limeGreen hover:-top-1' : 'transition-all ease-in-out duration-300 block relative top-0 text-center group hover:bg-transparent hover:-top-1 flex items-center flex-col'}`,
        'aria-label': `${label} page`,
        onClick: onLinkClick ? () => onLinkClick() : undefined,
    };

    if (isExternal) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }

    let src: StaticImageData;
    switch (label.toLowerCase()) {
        case 'achievements':
            src = achievements;
            break;
        case 'construction':
            src = construction;
            break;
        case 'creatures':
            src = creatures;
            break;
        case 'home':
            src = home;
            break;
        case 'items':
            src = items;
            break;
        case 'npcs':
            src = npcs;
            break;
        case 'reactions':
            src = reactions;
            break;
        case 'recipes':
            src = recipes;
            break;
        case 'seasons and events':
            src = seasonsAndEvents;
            break;
        case 'villagers':
            src = villagers;
            break;
        default:
            src = home;
    }

    return (
        <>
            {mobile ? (
                <div>
                    <Link {...linkProps}>
                        <Image loading='lazy' src={src} alt={label} className='transition-all ease-in-out duration-300 text-2xl text-slate-600 inline-block w-20 h-20 leading-10 rounded-full relative top-0 group-hover:bg-creamGreen group-hover:-top-1' />
                        <h3 className="transition-all ease-in-out duration-300 text-md text-gray-600 group-hover:text-gray-800">{label}</h3>
                    </Link>
                </div>
            ) : (
                <li>
                    <Link {...linkProps}>
                        <Image loading='lazy' src={src} alt={label} className='transition-all ease-in-out duration-300 text-2xl text-slate-600 inline-block w-9 h-9 leading-10 rounded-full relative top-0 group-hover:bg-creamGreen group-hover:-top-1' />
                        <h3 className="transition-all ease-in-out duration-300 text-md text-gray-600 group-hover:text-gray-800">{label}</h3>
                    </Link>
                </li>
            )}
        </>
    );
};
