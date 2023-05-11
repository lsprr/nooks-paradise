import { useRouter } from 'next/router';
import { isReaction } from '@/utils/animalCrossingTypes';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay';
import { Reaction } from 'animal-crossing/lib/types/Reaction';

const ReactionsPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: Reaction) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="Reactions"
            isItemType={isReaction}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default ReactionsPage;