import { useRouter } from 'next/router';
import { isAchievement } from '@/utils/animalCrossingTypes';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay';
import { Achievement } from 'animal-crossing/lib/types/Achievement';

const AchievementPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: Achievement) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="Achievements"
            isItemType={isAchievement}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default AchievementPage;