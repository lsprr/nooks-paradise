import { useEffect, useState } from 'react';

export default function Achievements() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/achievements')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    return (
        <>
            <h1>Achievements</h1>
        </>
    );
}