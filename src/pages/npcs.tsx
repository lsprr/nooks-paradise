import { DataFetch } from '@/components/DataFetch';
import { fetchData } from '@/utils/api';
import { Card } from "@/components/Card/Card";

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type NPC = {
    name: string;
    iconImage: StaticImageData;
};

const fetchFunction = () => {
    return fetchData('npcs');
};

const renderItem = (item: NPC) => {
    return (
        <Card
            name={item.name}
            image={item.iconImage}
        />
    );
};

export default function NPCs() {
    return <DataFetch category="npcs" type='grid' fetchFunction={fetchFunction} renderGridItem={renderItem} />;
}