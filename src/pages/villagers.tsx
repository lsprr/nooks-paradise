import { DataFetch } from '@/components/DataFetch';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Villager = {
    name: string;
    iconImage: StaticImageData;
};

const renderItem = (item: Villager) => {
    return (
        <Card
            name={item.name}
            image={item.iconImage}
        />
    );
};

export default function NPCs() {
    const fetchFunction = useFetchData();

    return <DataFetch
        category="villagers"
        type='grid'
        fetchFunction={(page, itemsPerPage) => fetchFunction("villagers", page, itemsPerPage)}
        renderGridItem={renderItem}
    />;
}