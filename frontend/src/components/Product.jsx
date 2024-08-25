import classes from "../pages/MainShop.module.css";
import {Link} from "react-router-dom";

const apiURL = process.env.REACT_APP_API_URL || "https://mma-mania-backend.onrender.com";

function Product({product}){
    return(
        <Link to={`/shop/${product.id}`} className={classes.product}>
            <img src={product.image} alt="product"/>
            <div className="product-info">
                <p>{product.name}</p>
                <p><strong>£{product.price}</strong></p>
            </div>
        </Link>
    )
}
export default Product;