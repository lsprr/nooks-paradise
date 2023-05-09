import { useRouter } from 'next/router';
import { isCreature } from '@/utils/typeCheckers';
import { ItemDetails } from '@/components/ItemDetails';
import { Item } from '@/components/Item/Item';

const CCreatures = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item) => {
        return (
            <Item data={item} />
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

export default CCreatures;