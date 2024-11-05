import CartItem from "./CartItem";

export default function Cart({ cartItems, handleCartDelete }) {
        let subtotal = 0;
    
        cartItems.forEach((item) => {
            subtotal += (item.quantity * item.price);
        })

    return(
        <div className="cartMain">
            <span>your cart</span>
            <div className="cart-container">
                {cartItems.map((item) => {
                     return <CartItem key={item.id} cartObj={item} handleCartDelete={handleCartDelete}/>
                })}
            </div>
            <div className="cart-total">
                <span>SUBTOTAL</span>
                <span>{"$" + subtotal }</span>
                <span>Shipping and taxes computed at checkout</span>
                <hr />
                <button>checkout</button>
            </div>
        </div>
    )
}