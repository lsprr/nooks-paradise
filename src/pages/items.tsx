import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";
import question from '@assets/images/question.webp';

type Item = {
    name: string;
    image: string;
    storageImage: string;
    closetImage: string;
};

const renderItem: (item: Item) => JSX.Element = (item) => {
    return (
        <Card
            page={'items'}
            name={item.name}
            image={item.image || item.storageImage || item.closetImage || question}
        />
    );
};

export default function Items() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="items"
            viewType='grid'
            fetchFunction={(page, itemsPerPage) => fetchFunction("items", page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}