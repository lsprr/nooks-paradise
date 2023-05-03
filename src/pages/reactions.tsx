import { DataFetch } from '@/components/DataFetch';
import { useFetchData } from '@/hooks/useFetchData';
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

const renderItem = (item: Reaction) => {
    return (
        <Card
            name={item.name}
            image={item.image}
        />
    );
};

export default function NPCs() {
    const fetchFunction = useFetchData();

    return <DataFetch
        category="reactions"
        type='grid'
        fetchFunction={(page, itemsPerPage) => fetchFunction("reactions", page, itemsPerPage)}
        renderGridItem={renderItem}
    />;
}