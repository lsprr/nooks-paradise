import { useEffect, useState } from 'react';

export default function Items() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/items')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    console.log(category);

    return (
        <>
            <h1>Items</h1>
        </>
    );
}