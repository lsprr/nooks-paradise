import { DataFetch } from '@/components/DataFetch';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";
import question from '@assets/images/question.webp';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type NPC = {
    page: string;
    gender: string;
    name: string;
    iconImage: StaticImageData;
};

const renderItem = (item: NPC) => {
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

    return <DataFetch
        category="npcs"
        type='grid'
        fetchFunction={(page, itemsPerPage) => fetchFunction("npcs", page, itemsPerPage)}
        renderGridItem={renderItem}
    />;
}