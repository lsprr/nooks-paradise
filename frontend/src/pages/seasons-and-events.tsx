import { useEffect, useState } from 'react';

export default function SeasonsAndEvents() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/seasonsandevents')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    return (
        <>
            <h1>Translations</h1>
        </>
    );
}