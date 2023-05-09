import { useRouter } from 'next/router';
import { isItem } from '@/utils/typeCheckers';
import { ItemDetails } from '@/components/ItemDetails';
import { Item } from '@/components/Item/Item';

const CItems = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item) => {
        return (
            <Item data={item} />
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

export default CItems;