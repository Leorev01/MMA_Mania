import classes from "./MainShop.module.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";

function MainShop() {
    const { filters, input } = useOutletContext();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const params = useSearchParams();

    useEffect(() => {
        async function fetchAndFilterProducts() {
            setLoading(true);
            try {
                const data = await getProducts();
                setProducts(data);

                // Apply filtering based on input and filters
                let filtered = [...data];

                if (input) {
                    filtered = filtered.filter(product =>
                        product.name.toLowerCase().includes(input.toLowerCase())
                    );
                }

                if (filters.gender !== '-') {
                    filtered = filtered.filter(product => product.categories.includes(filters.gender) || product.categories.includes("no gender"));
                }

                if (filters.type !== '-') {
                    filtered = filtered.filter(product => product.categories.includes(filters.type));
                }

                if (filters.size !== '-') {
                    filtered = filtered.filter(product => product.categories.includes(filters.size));
                }
                if (filters.sport !== '-') {
                    filtered = filtered.filter(product => product.categories.includes(filters.sport));
                }
                

                // Apply sorting
                filtered = sortProducts(filtered, filters.sort);
                
                setFilteredProducts(filtered);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchAndFilterProducts();
    }, [filters, input]); // Depend on filters and input

    // Sorting function
    function sortProducts(products, order) {
        switch (order) {
            case 'price: low to high':
                return products.sort((a, b) => a.price - b.price);
            case 'price: high to low':
                return products.sort((a, b) => b.price - a.price);
            default:
                return products; // No sorting
        }
    }

    if (loading) {
        return <h3>Loading...</h3>;
    }

    return (
        <div className={classes.shop}>
            <h1>Shop</h1>
            <div className={classes.products}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
}

async function getProducts() {
    const response = await fetch("http://localhost:8080/products");
    if (!response.ok) {
        throw new Response("Could not fetch products", { status: response.status });
    }
    const data = await response.json();
    return data; // Ensure this is an array
}

export default MainShop;
