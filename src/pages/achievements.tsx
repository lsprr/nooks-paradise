import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';
import { Card } from '@/components/Card/Card';

type Achievement = {
    name: string;
};

const renderItem: (item: Achievement) => JSX.Element = (item) => {
    return (
        <Card
            page={'achievements'}
            name={item.name}
        />
    );
};

export default function Achievements() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="achievements"
            fetchFunction={(page, itemsPerPage) => fetchFunction('achievements', page, itemsPerPage)}
            renderGridItem={renderItem}
        />
    );
}