import { useEffect, useState } from 'react';

export default function Translations() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/translations')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    console.log(category);

    return (
        <>
            <h1>Translations</h1>
        </>
    );
}