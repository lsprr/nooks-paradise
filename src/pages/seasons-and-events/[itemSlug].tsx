import { useRouter } from 'next/router';
import { isSeasonsAndEvents } from '@/utils/animalCrossingTypes';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay';
import { SeasonsAndEvents } from 'animal-crossing/lib/types/SeasonsAndEvents';

const SeasonsAndEventsPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: SeasonsAndEvents) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="seasonsandevents"
            isItemType={isSeasonsAndEvents}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default SeasonsAndEventsPage;