import { DataFetch } from '@hoc/DataFetch';
import { fetchData } from '@/utils/api';
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

const fetchFunction = () => {
    return fetchData('recipes');
};

const renderItem = (item: Recipe) => {
    return (
        <Card
            name={item.name}
            image={item.image}
        />
    );
};

export default function Recipes() {
    return <DataFetch category="recipes" fetchFunction={fetchFunction} renderItem={renderItem} />;
}