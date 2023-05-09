import { useRouter } from 'next/router';
import { isCreature } from '@/utils/typeCheckers';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay/ItemDisplay';
import { Creature } from 'animal-crossing/lib/types/Creature';

const CreaturesPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: Creature) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="creatures"
            isItemType={isCreature}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default CreaturesPage;