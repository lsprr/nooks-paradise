import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";

type Reaction = {
    page: string;
    sourceSheet: string;
    name: string;
    image: StaticImageData;
};

const renderItem: (item: Reaction) => JSX.Element = (item) => {
    return (
        <Card
            page={'reactions'}
            category={item.sourceSheet}
            name={item.name}
            image={item.image}
        />
    );
};

export default function NPCs() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="reactions"
            viewType='grid'
            fetchFunction={(page, itemsPerPage) => fetchFunction("reactions", page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}