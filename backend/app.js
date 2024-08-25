import express from "express";
import bodyParser from "body-parser";
import fs from "fs/promises";
import itemRoutes from "./routes/items.js";
import orderRoutes from "./routes/orders.js";

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

/*app.get("/products", async (req,res) => {
    const products = await fs.readFile('./items.json', 'utf-8');
    res.json(JSON.parse(products));
})*/

app.use('/products',itemRoutes);
app.use('/orders', orderRoutes);

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

