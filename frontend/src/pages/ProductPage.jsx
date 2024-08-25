import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./ProductPage.module.css";
import { useCart } from "../contexts/CartContext";

const apiURL = process.env.REACT_APP_API_URL || "https://mma-mania-backend.onrender.com";

function ProductPage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { productId } = useParams(); // Make sure this is correctly populated
    const {cart, addItem} = useCart();


    useEffect(() => {
        if (!productId) {
            setError("Product ID is not defined");
            return;
        }

        async function getProduct() {
            setLoading(true);
            try {
                console.log("Fetching product with ID:", productId); // Log productId to debug
                const response = await fetch(`${apiURL}/products/${productId}`);
                if (!response.ok) {
                    throw new Error(`Could not fetch product with ID: ${productId}`);
                }
                const data = await response.json();
                setProduct(data.product);
            } catch (err) {
                setError(err.message);
                console.log("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        }

        getProduct();
    }, [productId]);

    return (
        <div className={classes.product}>
            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>{error}</h1>}
            {!loading && product && (
                <>
                    <h1>{product.name}</h1>
                    <img src={product.image} alt={product.name} />
                    <div className={classes.productButton}>
                        <h3>£{product.price}</h3>
                        <button onClick={() => addItem(product)}>Add to cart</button>
                    </div>
                    <p>{product.description}</p>
                </>
            )}
        </div>
    );
}

export default ProductPage;
