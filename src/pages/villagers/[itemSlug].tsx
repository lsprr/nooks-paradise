import { useRouter } from 'next/router';
import { isVillager } from '@/utils/animalCrossingTypes';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay';
import { Villager } from 'animal-crossing/lib/types/Villager';

const VillagersPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: Villager) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="Villagers"
            isItemType={isVillager}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default VillagersPage;