import express from "express";
import {getAllItems, getItem} from "../data/item.js";

const itemRoutes = express.Router();

itemRoutes.get('/', async (req,res) => {
    try{
        const products = await getAllItems();
        res.json(products.products);
    }
    catch(error){
        console.log(error);
    }
});


// Route to get a specific product by ID
itemRoutes.get('/:id', async (req, res) => {
    try {
        const product = await getItem(req.params.id);
        if (!product) {
            // Return a 404 if the product is not found
            return res.status(404).json({ message: "Product not found" });
        }
        // Wrapping the product in an object
        res.json({ product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

itemRoutes.get('/sortFromLow', async (req,res) => {
    try{
        const storedData = await getAllItems();
        if(!storedData){
            //fix later
            return;
        }
        const sortedData = storedData.products.slice().sort((a,b) => a.price - b.price);
        res.json(sortedData);
    }catch(err){
        console.log(err);
    }
    
})


export default itemRoutes;