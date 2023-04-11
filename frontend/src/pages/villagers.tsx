import { useEffect, useState } from 'react';

export default function Villagers() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/villagers')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    return (
        <>
            <h1>Villagers</h1>
        </>
    );
}