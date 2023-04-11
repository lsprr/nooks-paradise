import { useEffect, useState } from 'react';

export default function NPCs() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/npcs')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    return (
        <>
            <h1>NPCs</h1>
        </>
    );
}