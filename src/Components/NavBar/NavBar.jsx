import { NavLink } from "react-router-dom"

export default function NavBar() {
    return(
        <div className="navBar">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </nav>
        </div>
    )
}