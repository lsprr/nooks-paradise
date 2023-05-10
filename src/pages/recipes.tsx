import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";

type Recipe = {
    name: string;
    image: StaticImageData | string;
};

const renderItem: (item: Recipe) => JSX.Element = (item) => {
    return (
        <Card
            page={'recipes'}
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