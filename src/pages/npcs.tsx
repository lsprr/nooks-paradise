import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";
import question from '@assets/images/question.webp';

type NPC = {
    page: string;
    gender: string;
    name: string;
    iconImage: StaticImageData;
};

const renderItem: (item: NPC) => JSX.Element = (item) => {
    const isImageExist = () => {
        if (item.iconImage) {
            return item.iconImage
        } else {
            return question;
        }
    }

    return (
        <Card
            page={'npcs'}
            category={item.gender}
            name={item.name}
            image={isImageExist()}
        />
    );
};

export default function NPCs() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="npcs"
            viewType='grid'
            fetchFunction={(page, itemsPerPage) => fetchFunction("npcs", page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}