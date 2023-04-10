import { useEffect, useState } from 'react';

export default function Creatures() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/creatures')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    console.log(category);

    return (
        <>
            <h1>Creatures</h1>
        </>
    );
}