import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";
import question from '@assets/images/question.webp';

type NPC = {
    name: string;
    iconImage: StaticImageData | string;
};

const renderItem: (item: NPC) => JSX.Element = (item) => {
    return (
        <Card
            page={'npcs'}
            name={item.name}
            image={item.iconImage || question}
        />
    );
};

export default function NPCs() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="npcs"
            fetchFunction={(page, itemsPerPage) => fetchFunction("npcs", page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}