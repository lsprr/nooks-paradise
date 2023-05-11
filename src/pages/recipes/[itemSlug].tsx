import { useRouter } from 'next/router';
import { isRecipe } from '@/utils/animalCrossingTypes';
import { ItemDetails } from '@/components/ItemDetails';
import { ItemDisplay } from '@/components/ItemDisplay';
import { Recipe } from 'animal-crossing/lib/types/Recipe';

const RecipesPage = () => {
    const router = useRouter();
    const { itemSlug } = router.query;

    const renderItem = (item: Recipe) => {
        return (
            <ItemDisplay data={item} />
        )
    }

    return (
        <ItemDetails
            category="Recipes"
            isItemType={isRecipe}
            itemSlug={itemSlug}
            renderItem={renderItem}
        />
    );
};

export default RecipesPage;