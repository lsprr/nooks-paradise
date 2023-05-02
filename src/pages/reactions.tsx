import { DataFetch } from '@/components/DataFetch';
import { fetchData } from '@/utils/api';
import { Card } from "@/components/Card/Card";

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Reaction = {
    name: string;
    image: StaticImageData;
};

const fetchFunction = () => {
    return fetchData('reactions');
};

const renderItem = (item: Reaction) => {
    return (
        <Card
            name={item.name}
            image={item.image}
        />
    );
};

export default function Reactions() {
    return <DataFetch category="reactions" type='grid' fetchFunction={fetchFunction} renderGridItem={renderItem} />;
}