import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from '@/components/Card/Card';

type SeasonAndEvent = {
    name: string;
};

const renderItem: (item: SeasonAndEvent) => JSX.Element = (item) => {
    return (
        <Card
            page={'construction'}
            name={item.name}
        />
    );
};

export default function SeasonsAndEvents() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="Seasons And Events"
            fetchFunction={(page, itemsPerPage) => fetchFunction('seasonsandevents', page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}