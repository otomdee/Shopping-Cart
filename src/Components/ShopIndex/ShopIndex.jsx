import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Shop({handleCardChange}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
         fetch('https://fakestoreapi.com/products?limit=4')
        .then((res) => {
            if (!res.ok) {
                throw Error("couldn't fetch data")
            }
            return res.json(); 
        })
        .then((data) => {
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch((err) => {
            setLoading(false);
            setError(err.message);
        })
    }, [])


    return(
        <div className="shopMain">
            <div className="shop-container">
                {error && <div>{error}</div>}
                {loading && <div>Loading...</div> }
                {
                    data && data.map(item => {
                        return <Card
                                key={item.id}
                                id={item.id}
                                url={item.image}
                                alt={item.title}
                                price={item.price}
                                desc={item.description}
                                handleCardChange={handleCardChange}
                                />
                    })
                }
            </div>
        </div>
    )
}