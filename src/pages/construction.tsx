import { DataFetch } from '@hoc/DataFetch';
import { fetchData } from '@/utils/api';
import { Card } from "@/components/Card/Card";

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Construction = {
    name: string;
    image: StaticImageData;
};

const fetchFunction = () => {
    return fetchData('construction');
};

const renderItem = (item: Construction) => {
    return (
        <Card
            name={item.name}
            image={item.image}
        />
    );
};

export default function Construction() {
    return <DataFetch category="construction" type="grid" fetchFunction={fetchFunction} renderGridItem={renderItem} />;
}