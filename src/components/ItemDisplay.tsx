import { BackButton } from './Button/BackButton';
import { Construction } from '@/components/Category/Construction';
import { Creatures } from '@/components/Category/Creatures';
// import { Items } from '@components/Category/Items';
import { NPCs } from '@components/Category/NPCs';
import { Reactions } from '@components/Category/Reactions';
import { Achievements } from '@components/Category/Achievements';

type ItemDisplayProps = {
    data: any;
}

export const ItemDisplay = ({ data }: ItemDisplayProps) => {
    let content;

    switch (data.sourceSheet) {

        case 'Construction':
            content = <Construction data={data} />
            break;

        case 'Fish':
        case 'Insects':
        case 'Sea Creatures':
            content = <Creatures data={data} />
            break;

        // case 'Accessories':
        // case 'Artwork':
        // case 'Bags':
        // case 'Bottoms':
        // case 'Ceiling Decor':
        // case 'Clothing Other':
        // case 'Dress-Up':
        // case 'Fencing':
        // case 'Floors':
        // case 'Fossils':
        // case 'Gyroids':
        // case 'Headwear':
        // case 'Housewares':
        // case 'Message Cards':
        // case 'Miscellaneous':
        // case 'Music':
        // case 'Other':
        // case 'Photos':
        // case 'Posters':
        // case 'Rugs':
        // case 'Shoes':
        // case 'Socks':
        // case 'Tools/Goods':
        // case 'Tops':
        // case 'Umbrellas':
        // case 'Wall-mounted':
        // case 'Wallpaper':
        //     content = <Items data={data} />
        //     break;

        case 'Special NPCs':
            content = <NPCs data={data} />
            break;

        case 'Reactions':
            content = <Reactions data={data} />
            break;

        case 'Achievements':
            content = <Achievements data={data} />
            break;
    }

    return (
        <>
            <BackButton />
            {content}
        </>
    )
}
