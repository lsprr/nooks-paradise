import { DataFetch } from '@/components/DataFetch';
import { fetchData } from '@/utils/api';
import { Card } from "@/components/Card/Card";
import question from '@assets/images/questionMark.png';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type NPC = {
    name: string;
    iconImage: StaticImageData;
};

const fetchFunction = () => {
    return fetchData('npcs');
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
            name={item.name}
            image={isImageExist()}
        />
    );
};

export default function NPCs() {
    return <DataFetch category="npcs" type='grid' fetchFunction={fetchFunction} renderGridItem={renderItem} />;
}