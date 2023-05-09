import { useRouter } from 'next/router';
import { isItem } from '@/utils/typeCheckers';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay/ItemDisplay';
import { Item } from 'animal-crossing/lib/types/Item';

const ItemsPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: Item) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="items"
            isItemType={isItem}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default ItemsPage;