import { useEffect, useState } from 'react';

export default function Reactions() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/reactions')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    console.log(category);

    return (
        <>
            <h1>Reactions</h1>
        </>
    );
}