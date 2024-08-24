import classes from "./ShopFilterBar.module.css";
import Filter from "./Filter";
import {useState} from "react";

function ShopFilterBar({handleFilterChange, handleInputChange, clearFilters, applyFilter}){
    
const [open, setOpen] = useState(false);

function handleDropdown(){
    setOpen(prevState => !prevState);
}

    return(
        <div className={classes.shopContainer}>
            <nav className={classes.shopFilterBar}>
                <h1>Filters</h1>
                <div className={classes.select}>
                    <Filter name="sort" label="Sort by" values={["-", "Price: Low to High", "Price: High to Low"]} handleChange={handleFilterChange}/>
                    <Filter name="gender" label="Gender" values={["-", "Mens", "Womens", "Kids"]} handleChange={handleFilterChange}/>
                    <Filter name="type" label='Type' values={['-', 'Gloves', 'Shin guards', 'Rash guards', 'Clothes', 'Hand wraps', 'Equipment']} handleChange={handleFilterChange}/>
                    <Filter name="size" label="Size" values={['-', '4oz', '6oz', '8oz', '10oz', '12oz', '14oz', '16oz', 'XS', 'S', 'M', 'L', 'XL']} handleChange={handleFilterChange}/>
                    <Filter name="sport" label="Sport" values={['-', 'Boxing', 'Muay Thai', 'BJJ', 'MMA']} handleChange={handleFilterChange}/>
                </div>
                <h1 onClick={handleDropdown} className={classes.dropArrow + ' ' + (open && classes.open)}>◀</h1>
                {open && <div className={classes.dropdown}>
                    <Filter name="sort" label="Sort by" values={["-", "Price: Low to High", "Price: High to Low"]} handleChange={handleFilterChange}/>
                    <Filter name="gender" label="Gender" values={["-", "Mens", "Womens", "Kids"]} handleChange={handleFilterChange}/>
                    <Filter name="type" label='Type' values={['-', 'Gloves', 'Shin guards', 'Rash guards', 'Clothes', 'Hand wraps', 'Equipment']} handleChange={handleFilterChange}/>
                    <Filter name="size" label="Size" values={['-', '4oz', '6oz', '8oz', '10oz', '12oz', '14oz', '16oz', 'XS', 'S', 'M', 'L', 'XL']} handleChange={handleFilterChange}/>
                    <Filter name="sport" label="Sport" values={['-', 'Boxing', 'Muay Thai', 'BJJ', 'MMA']} handleChange={handleFilterChange}/>
                    <div className={classes.dropBtns}>
                        <button onClick={() => (applyFilter(), handleDropdown())}>Apply</button>
                        <button onClick={() => (clearFilters(), handleDropdown())}>Clear</button>
                    </div>
                </div> }
                <button onClick={() => (applyFilter, handleDropdown)}>Apply</button>
                <button onClick={() => (clearFilters, handleDropdown)}>Clear</button>
            </nav>
            <input className={classes.searchBar} type="text" placeholder="Search for a product..." onChange={handleInputChange}/>
        </div>
    );
}

export default ShopFilterBar;

