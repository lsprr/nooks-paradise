import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";

type Creature = {
    page: string;
    sourceSheet: string;
    name: string;
    iconImage: StaticImageData | string;
};

const renderItem: (item: Creature) => JSX.Element = (item) => {
    return (
        <Card
            page={'creatures'}
            category={item.sourceSheet}
            name={item.name}
            image={item.iconImage}
        />
    );
};

export default function Creatures() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="creatures"
            viewType='grid'
            fetchFunction={(page, itemsPerPage) => fetchFunction("creatures", page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}