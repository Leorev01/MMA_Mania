import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useState, useRef } from "react";
import CartModal from "./CartModal";

function Navbar(){

    const [open, setOpen] = useState(false);

    const modalRef = useRef();
    
    function clickHandler(){
        setOpen(open => !open);
    }

    return(
        <>
        <header>
            <nav className={classes.navbar}>
                <img className={classes.logo} src="/images/logo.png"/>
                <Link to="/"><h2>MMA Mania</h2></Link>
                <div className={classes.navLinks}>
                    <img className={classes.cartIcon} src="/images/Cart_Icon.png" onClick={() => (clickHandler(), modalRef.current.open())}/>
                    <button className={classes.dropdownBtn} onClick={clickHandler}>☰</button>
                    {open && <div className={classes.dropdownContent}>
                        <a onClick={() => (clickHandler(), modalRef.current.open())}>Cart</a>
                        <Link to="/" onClick={clickHandler}>Home</Link>
                        <Link to="/shop" onClick={clickHandler}>Shop</Link>
                        <Link to="/about" onClick={clickHandler}>About</Link>
                        <Link to="/contact" onClick={clickHandler}>Contact</Link>
                    </div>}
                </div>
            </nav>
        </header>
        <CartModal ref={modalRef}/>
        </>
    )
}

export default Navbar;