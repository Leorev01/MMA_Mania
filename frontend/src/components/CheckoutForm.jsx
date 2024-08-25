import { Navigate, useNavigate } from "react-router-dom";
import classes from "../pages/CheckoutPage.module.css";
import { useCart } from "../contexts/CartContext";

async function submitHandler(event, navigate, clearCart){
    const apiURL = "https://mma-mania-backend.onrender.com";
    event.preventDefault();
    const response = await fetch(`${apiURL}/orders/addOrder`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            address: document.getElementById("street").value + " " + document.getElementById("city").value + " " + document.getElementById("zip").value
        })
    })
    if(!response.ok){
        throw new Error("Unable to create order");
        alert("Unable to create order");
    }
    const data = await response.json();
    console.log(data);
    clearCart([]);
    alert("Order created successfully");
    navigate('/');
}


export default function CheckoutForm(){
    const {clearCart} = useCart();
    const navigate = useNavigate();
    return(
        <form onSubmit={() => submitHandler(event, navigate, clearCart)} className={classes.checkoutForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required/>
            <div className={classes.address}>
                <p>Address</p>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" name="street" required/>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required/>
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip" name="zip" required/>
            </div>
            <button>Submit</button>
        </form>
    )
}