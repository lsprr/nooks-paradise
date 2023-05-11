import { useRouter } from 'next/router';
import { isConstruction } from '@/utils/animalCrossingTypes';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay';
import { Construction } from 'animal-crossing/lib/types/Construction';

const ConstructionPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: Construction) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="construction"
            isItemType={isConstruction}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default ConstructionPage;
