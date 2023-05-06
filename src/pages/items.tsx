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

type Item = {
    page: string;
    sourceSheet: string;
    name: string;
    image: StaticImageData;
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
            page={'items'}
            category={item.sourceSheet}
            name={item.name}
            image={isImageExist()}
        />
    );
};

export default function Items() {
    const fetchFunction = useFetchData();

    return <DataFetch
        category="items"
        type='grid'
        fetchFunction={(page, itemsPerPage) => fetchFunction("items", page, itemsPerPage)}
        renderGridItem={renderItem}
    />;
}