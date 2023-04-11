import { useEffect, useState } from 'react';

export default function Recipes() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/recipes')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    return (
        <>
            <h1>Recipes</h1>
        </>
    );
}