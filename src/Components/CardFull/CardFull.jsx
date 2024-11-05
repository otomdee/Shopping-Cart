import { useState } from "react"

export default function CardFull({id, url, desc, title, price, handleCartChange}) {

    const [quantity, setQuantity] = useState(1);

    function handleItemSubmit() {
        const cartObj = {
            id: id,
            url: url,
            title: title,
            quantity: quantity,
            price: price,
        };

        handleCartChange(cartObj);
    }

    return (
        <div className="card-full">
            <img src={url} alt={title} />
            <span>{title}</span>
            <span>{desc}</span>
            <span>{price}</span>
            <div className="item-amount">
                <button onClick={ () => {
                    quantity > 1 && setQuantity(quantity - 1)
                }
                } className="reduce-amount">-</button>
                <span>{quantity}</span>
                <button onClick={ () => {
                    setQuantity(quantity + 1)
                }
                } className="increase-amount">+</button>
            </div>
            <button onClick={() => handleItemSubmit()}>add to cart</button>
        </div>
    )
}