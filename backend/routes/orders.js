import express from "express";
import fs from "fs/promises";
import bodyParser from "body-parser";

const orderRoutes = express.Router();

orderRoutes.use(bodyParser.json());

orderRoutes.get('/', async (req,res) => {
    try{
        const response = await fs.readFile('orders.json');
        orders = JSON.parse(response);
        res.status(200).json(orders);
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Error retrieving orders!"});
    }
})

orderRoutes.post('/addOrder', async (req,res) => {
    try{
        const {name, email, address} = req.body;
        const newOrder = req.body;

        let orders=[];
        try{
            const response = await fs.readFile('orders.json');
            orders = JSON.parse(response);
        }catch(err){
            console.error(err);
            res.status(500).json({message:"Error retrieving orders!"})
        }
        orders.push(newOrder);
        await fs.writeFile('orders.json', JSON.stringify(orders));
        res.status(201).json({message: "Order created succesfully!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Error creating order!"});
    }
    
})

export default orderRoutes;