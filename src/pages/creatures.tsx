import { DataFetch } from '@hoc/DataFetch';
import { fetchData } from '@/utils/api';
import { Card } from "@/components/Card/Card";

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Creature = {
    name: string;
    critterpediaImage: StaticImageData;
};

const fetchFunction = () => {
    return fetchData('creatures');
};

const renderItem = (item: Creature) => {
    return (
        <Card
            name={item.name}
            image={item.critterpediaImage}
        />
    );
};

export default function Creatures() {
    return <DataFetch category="creatures" fetchFunction={fetchFunction} renderItem={renderItem} />;
}