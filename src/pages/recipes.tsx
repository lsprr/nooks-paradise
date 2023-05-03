import { DataFetch } from '@/components/DataFetch';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Recipe = {
    name: string;
    image: StaticImageData;
};

const renderItem = (item: Recipe) => {
    return (
        <Card
            name={item.name}
            image={item.image}
        />
    );
};

export default function NPCs() {
    const fetchFunction = useFetchData();

    return <DataFetch
        category="recipes"
        type='grid'
        fetchFunction={(page, itemsPerPage) => fetchFunction("recipes", page, itemsPerPage)}
        renderGridItem={renderItem}
    />;
}