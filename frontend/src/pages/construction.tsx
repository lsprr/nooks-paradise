import { useEffect, useState } from 'react';

export default function Construction() {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/construction')
            .then((response) => response.json())
            .then((data) => {
                setCategory({ data })
            });
    }, []);

    console.log(category)

    return (
        <>
            <h1>Construction</h1>
        </>
    );
}