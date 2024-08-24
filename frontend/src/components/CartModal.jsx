import {createPortal} from "react-dom";
import {useRef, forwardRef, useImperativeHandle} from "react";
import classes from "./CartModal.module.css";
import { useCart } from "../contexts/CartContext";
import {Link} from "react-router-dom";

const CartModal = forwardRef(function CartModal({}, ref){

    const {cart, addItem, removeItem, clearCart} = useCart();
    const totalPrice =cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const dialog = useRef();
    useImperativeHandle(ref,()=>{
        return{
            open:()=>{
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className={classes.dialog}>
            <div className={classes.content}>
                <h1>Cart</h1>
                {cart.length === 0 && <h3>Cart is empty</h3>}
                {cart.length > 0 && (
                    <div className={classes.list}>
                        {cart.map(item => (
                            <p key={item.id}>
                                {item.name} - £{item.price} - <strong>{item.quantity}</strong>
                                <button onClick={() => removeItem(item.id)}>-</button>
                                <button onClick={() => addItem(item)}>+</button>
                            </p>
                        ))}
                        <h4>Total Price: £{totalPrice}</h4>
                    </div>
                )}
                <div className={classes.buttons}>
                    <button onClick={clearCart}>Clear Cart</button>
                    <Link to='/checkout'><button onClick={() => dialog.current.close()}>Checkout</button></Link>
                    <button onClick={() => dialog.current.close()}>Close</button>
                </div>
            </div>
        </dialog>,
        document.getElementById("modal")
    );
})

export default CartModal;