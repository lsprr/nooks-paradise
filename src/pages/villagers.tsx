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
    page: string;
    gender: string;
    name: string;
    iconImage: StaticImageData;
};

const renderItem = (item: Villager) => {
    return (
        <Card
            page={'villagers'}
            category={item.gender}
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