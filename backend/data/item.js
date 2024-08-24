import fs from "fs/promises";

export async function readData(){
    const data = await fs.readFile('items.json');
    return JSON.parse(data);
}

export async function writeData(data){
    await fs.writeFile('items.json', JSON.stringify(data));
}

export async function getAllItems(){
    const storedData = await readData();
    if(!storedData.products){
        //fix later
        return [];
    }
    return storedData;
}

export async function getItem(id){
    const storedData = await readData();
    if(!storedData.products || storedData.products.length === 0){
        //fix later
        throw new Response({status:500},{message:'No products'});
    }
    const item = storedData.products.find((item) => item.id === id);
    if(!item){
        //fix later
        return null;
    }
    return item;
}
