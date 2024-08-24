import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";
import ShopFilterBar from "../components/ShopFilterBar.jsx";
import { useState } from "react";

function ShopLayout(){
    const [selectedFilters, setSelectedFilters] = useState({
        sort: "-",
        gender: "-",
        type: "-",
        size: "-",
        sport: "-"
    });
    const [filters, setFilters] = useState({
        sort: "-",
        gender: "-",
        type: "-",
        size: "-",
        sport: "-"
    });
    
    function handleFilterChange(event){
        const {name, value} = event.target;
        setSelectedFilters(prevFilters => {
            return {...prevFilters, [name]: value}
        })
    }
    
    function applyFilter(){
        setFilters(selectedFilters);
    }

    function clearFilters(){
        setFilters({
            sort: "-",
            gender: "-",
            type: "-",
            size: "-",
            sport: "-"
        })
        setSelectedFilters({
            sort: "-",
            gender: "-",
            type: "-",
            size: "-",
            sport: "-"
        })

        setInput("");
        
    }

    const [input, setInput] = useState();

    function handleInputChange(event){
        setInput(event.target.value);
    }
    
    return(
        <>
        <Navbar />
        <ShopFilterBar handleFilterChange={handleFilterChange} handleInputChange={handleInputChange} clearFilters={clearFilters} applyFilter={applyFilter}/>
        <main>
            <Outlet context={{filters, input, confirm}} />
        </main>
        </>
    )
};

export default ShopLayout;