import { useRouter } from 'next/router';
import { isNpc } from '@/utils/typeCheckers';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay';
import { Npc } from 'animal-crossing/lib/types/NPC';

const NPCSPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: Npc) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="NPCS"
            isItemType={isNpc}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default NPCSPage;