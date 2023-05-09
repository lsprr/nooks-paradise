import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from "@/components/Card/Card";
import question from '@assets/images/question.webp';

type Item = {
    page: string;
    sourceSheet: string;
    name: string;
    image: string;
    storageImage: string;
    closetImage: string;
};

const renderItem: (item: Item) => JSX.Element = (item) => {
    const isImageExist = () => {
        if (item.image) {
            return item.image
        } else if (item.storageImage) {
            return item.storageImage
        } else if (item.closetImage) {
            return item.closetImage
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

    return (
        <DataView
            category="items"
            viewType='grid'
            fetchFunction={(page, itemsPerPage) => fetchFunction("items", page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}