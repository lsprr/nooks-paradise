import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";

type Recipe = {
    page: string;
    category: string;
    name: string;
    image: StaticImageData;
};

const renderItem: (item: Recipe) => JSX.Element = (item) => {
    return (
        <Card
            page={'recipes'}
            category={item.category}
            name={item.name}
            image={item.image}
        />
    );
};

export default function NPCs() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="recipes"
            viewType='grid'
            fetchFunction={(page, itemsPerPage) => fetchFunction("recipes", page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}