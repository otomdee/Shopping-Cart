import CartItem from "./CartItem";

export default function Cart({ cartItems }) {
    return(
        <div className="cartMain">
            <span>your cart</span>
            <div className="cart-container">
                {cartItems.map((item) => {
                     return <CartItem key={item.id} cartObj={item} />
                })}
            </div>
        </div>
    )
}