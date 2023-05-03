import { DataFetch } from '@/components/DataFetch';
import { useFetchData } from '@/hooks/useFetchData';
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

const renderItem = (item: Creature) => {
    return (
        <Card
            name={item.name}
            image={item.critterpediaImage}
        />
    );
};

export default function Creatures() {
    const fetchFunction = useFetchData();

    return <DataFetch
        category="creatures"
        type='grid'
        fetchFunction={(page, itemsPerPage) => fetchFunction("creatures", page, itemsPerPage)}
        renderGridItem={renderItem}
    />;
}