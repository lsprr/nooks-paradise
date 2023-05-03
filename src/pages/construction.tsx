import { DataFetch } from '@/components/DataFetch';
import { useFetchData } from '@/hooks/useFetchData';
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

const renderItem = (item: Construction) => {
    return (
        <Card
            name={item.name}
            image={item.image}
        />
    );
};

export default function Constructions() {
    const fetchFunction = useFetchData();

    return <DataFetch
        category="construction"
        type='grid'
        fetchFunction={(page, itemsPerPage) => fetchFunction("construction", page, itemsPerPage)}
        renderGridItem={renderItem}
    />;
}