import {useCart} from "../contexts/CartContext";
import CheckoutForm from "../components/CheckoutForm";
import classes from "./CheckoutPage.module.css";

function CheckoutPage(){

    const {cart} = useCart();

    return(
        <>
        <div className={classes.cartHeader}>
            <h1>Checkout Page</h1>
            <h3>Your cart</h3>
            {cart.map(item => (
                <div key={item.id}>
                    {item.name} - £{item.price} - <strong>{item.quantity}</strong>
                </div> 
            ))}
            <h3>Total: £{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
        </div>
        <div>
            <CheckoutForm/>
        </div>

        </>
    );
}

export default CheckoutPage;