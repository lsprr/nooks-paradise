import { useRouter } from 'next/router';
import { isConstruction } from '@/utils/typeCheckers';
import { ItemDetails } from '@/components/ItemDetails';
import { Item } from '@/components/Item/Item';

const CConstruction = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item) => {
        return (
            <Item data={item} />
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

export default CConstruction;