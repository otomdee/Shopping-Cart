export default function CardFull({url, desc, title, price}) {
    return (
        <div className="card-full">
            <img src={url} alt={title} />
            <span>{title}</span>
            <span>{desc}</span>
            <span>{price}</span>
            <div className="item-amount">
                <button className="reduce-amount">-</button>
                <input type="number" />
                <button className="increase-amount">+</button>
            </div>
            <button>add to cart</button>
        </div>
    )
}