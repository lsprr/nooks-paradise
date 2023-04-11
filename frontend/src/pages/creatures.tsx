import Filter from '@/components/Filter';
import { useEffect, useState } from 'react';

export default function Creatures() {
    const [fish, setFish] = useState(null);
    const [insects, setInsects] = useState(null);
    const [seaCreatures, setSeaCreatures] = useState(null);
    const [whichItem, setWhichItem] = useState<Array<any> | null>(null);
    const [findItem, setFindItem] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/creatures')
            .then((response) => response.json())
            .then((data) => {
                setFish(data['Fish']);
                setInsects(data['Insects']);
                setSeaCreatures(data['Sea Creatures']);
                setWhichItem(data['Fish']);
            });
    }, []);

    const handleFinditemChange = (value: string) => {
        setFindItem(value);
    };

    const handleWhichIndividualChange = (value: string) => {
        switch (value) {
            case 'fish':
                setWhichItem(fish);
                break;
            case 'insects':
                setWhichItem(insects);
                break;
            case 'seaCreatures':
                setWhichItem(seaCreatures);
                break;
            default:
                setWhichItem(fish);
        }
    };

    return (
        <Filter
            title={'Creatures'}
            whichItem={whichItem}
            findItem={findItem}
            onFindItemChange={handleFinditemChange}
            onWhichItemChange={handleWhichIndividualChange}
        />
    );
}
