import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from '@/components/Card/Card';

type Construction = {
    name: string;
    image: StaticImageData | string;
};

const renderItem: (item: Construction) => JSX.Element = (item) => {
    return (
        <Card
            page={'construction'}
            name={item.name}
            image={item.image}
        />
    );
};

export default function Constructions() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="construction"
            viewType="grid"
            fetchFunction={(page, itemsPerPage) => fetchFunction('construction', page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}