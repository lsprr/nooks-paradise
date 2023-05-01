import { DataFetch } from '@hoc/DataFetch';
import { fetchData } from '@/utils/api';
import { Card } from "@/components/Card/Card";
import question from '@assets/images/questionMark.png';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type Item = {
    name: string;
    image: StaticImageData;
};

const fetchFunction = () => {
    return fetchData('items');
};

const renderItem = (item: Item) => {
    const isImageExist = () => {
        if (item.image) {
            return item.image
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

export default function Items() {
    return <DataFetch category="items" fetchFunction={fetchFunction} renderItem={renderItem} />;
}