import { Link } from "react-router-dom"

export default function Card({url, alt, price, desc, handleCardChange}) {

    const itemObj = {
        url: url,
        desc: desc,
        title: alt,
        price: price,   
    }

    return (
        <div className="cardItem">
            <Link to="item">
                <img src={url} alt={alt} onClick={() => handleCardChange(itemObj)}/>
                <span>{alt}</span>
                <span>{price}</span>
            </Link>
        </div>
    )
}