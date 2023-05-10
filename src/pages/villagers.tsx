import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";

type Villager = {
    name: string;
    iconImage: StaticImageData | string;
};

const renderItem: (item: Villager) => JSX.Element = (item) => {
    return (
        <Card
            page={'villagers'}
            name={item.name}
            image={item.iconImage}
        />
    );
};

export default function NPCs() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="villagers"
            viewType='grid'
            fetchFunction={(page, itemsPerPage) => fetchFunction("villagers", page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}