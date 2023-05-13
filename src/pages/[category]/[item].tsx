import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BackButton } from '@/components/BackButton';
import { Achievements } from '@/components/Category/Achievements';
import { Construction } from '@/components/Category/Construction';
import { Creatures } from '@/components/Category/Creatures';
import { NPCs } from '@/components/Category/NPCs';
import { Reactions } from '@/components/Category/Reactions';
import { Recipes } from '@/components/Category/Recipes';
import { SeasonsAndEvents } from '@/components/Category/SeasonsAndEvents';
import { Villagers } from '@/components/Category/Villagers';

const ItemPage = () => {
    const router = useRouter();
    const { category, item } = router.query;
    const [data, setData] = useState(null);
    let content;

    useEffect(() => {
        if (item) {
            fetch(`/api/${category}/${item}`)
                .then(res => res.json())
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [item, category]);

    if (data) {
        switch (data.sourceSheet) {

            case 'Achievements':
                content = <Achievements data={data} />
                break;

            case 'Construction':
                content = <Construction data={data} />
                break;

            case 'Fish':
            case 'Insects':
            case 'Sea Creatures':
                content = <Creatures data={data} />
                break;

            case 'Special NPCs':
                content = <NPCs data={data} />
                break;

            case 'Reactions':
                content = <Reactions data={data} />
                break;

            case 'Recipes':
                content = <Recipes data={data} />
                break;

            case 'Seasons and Events':
                content = <SeasonsAndEvents data={data} />
                break;

            case 'Villagers':
                content = <Villagers data={data} />
                break;
        }
    }

    return (
        <>
            <BackButton />
            {content}
        </>
    );
};

export default ItemPage;
