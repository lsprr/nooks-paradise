import { DataFetch } from '@/components/DataFetch';
import { fetchData } from '@/utils/api';
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

const fetchFunction = () => {
    return fetchData('villagers');
};

const renderItem = (item: Villager) => {
    return (
        <Card
            name={item.name}
            image={item.iconImage}
        />
    );
};

export default function Villagers() {
    return <DataFetch category="villagers" type='grid' fetchFunction={fetchFunction} renderGridItem={renderItem} />;
}