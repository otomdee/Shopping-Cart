export default function CartItem({cartObj}) {

    return (
        <div className="cart-item">
            <img src={cartObj.url} alt={cartObj.title} />
            <span className="cart-item-name">{cartObj.title}</span>
            <span className="cart-item-amount">{"x" + cartObj.quantity}</span>
            <span className="cart-item-price">{"$" + (cartObj.price * cartObj.quantity)}</span>
            <button className="remove-item">X</button>
        </div>
    )
}