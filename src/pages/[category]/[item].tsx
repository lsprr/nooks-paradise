import { Achievement } from 'animal-crossing/lib/types/Achievement';
import { Creature } from 'animal-crossing/lib/types/Creature';
import { Item } from 'animal-crossing/lib/types/Item';
import { SeasonsAndEvents } from 'animal-crossing/lib/types/SeasonsAndEvents';
import { Villager } from 'animal-crossing/lib/types/Villager';
import { Npc } from 'animal-crossing/lib/types/NPC';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toCamelCase } from '@/utils/toCamelCase';
import { BackButton } from '@/components/BackButton';
import { AchievementItem } from '@/components/Item/AchievementItem';
import { ConstructionItem } from '@/components/Item/ConstructionItem';
import { CreatureItem } from '@/components/Item/CreatureItem';
import { NPCItem } from '@/components/Item/NPCItem';
import { ReactionItem } from '@/components/Item/ReactionItem';
import { RecipeItem } from '@/components/Item/RecipeItem';
import { SeasonAndEventItem } from '@/components/Item/SeasonAndEventItem';
import { VillagerItem } from '@/components/Item/VillagerItem';

type CustomConstruction = {
    sourceSheet: string;
    name: string | null;
    image: StaticImageData | string;
    buy: number | null;
    category: string | null;
    source: string;
    filename: string;
    uniqueEntryId: string;
};

type CustomReaction = {
    sourceSheet: string;
    num: number;
    name: string;
    image: StaticImageData | string;
    source: string;
    seasonEventExclusive: boolean | null;
    iconFilename: StaticImageData | string;
}

type CustomRecipe = {
    sourceSheet: string;
    name: string;
    image: StaticImageData | string;
    category: string;
    materials: {
        [key: string]: number;
    };
    recipesToUnlock: number;
    seasonEvent: string;
    sell: number;
    source: string;
    sourceNotes: string;
}

type ResponseItem = Achievement | CustomConstruction | Creature | Item | CustomReaction | CustomRecipe | SeasonsAndEvents | Villager | Npc;

const ItemPage = () => {
    const router = useRouter();
    const { category, item } = router.query;
    const [data, setData] = useState<ResponseItem | null>(null);
    let content;

    useEffect(() => {
        if (item && typeof item === 'string' && category && typeof category === 'string') {
            fetch(`/api/${toCamelCase(category)}/${item}`)
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
                content = <AchievementItem data={data as Achievement} />
                break;

            case 'Construction':
                content = <ConstructionItem data={data as CustomConstruction} />
                break;

            case 'Fish':
            case 'Insects':
            case 'Sea Creatures':
                content = <CreatureItem data={data as Creature} />
                break;

            case 'Special NPCs':
                content = <NPCItem data={data as Npc} />
                break;

            case 'Reactions':
                content = <ReactionItem data={data as CustomReaction} />
                break;

            case 'Recipes':
                content = <RecipeItem data={data as CustomRecipe} />
                break;

            case 'Seasons and Events':
                content = <SeasonAndEventItem data={data as SeasonsAndEvents} />
                break;

            case 'Villagers':
                content = <VillagerItem data={data as Villager} />
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
