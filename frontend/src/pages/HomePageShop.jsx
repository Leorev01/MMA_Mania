import {Link} from "react-router-dom";
import {useState} from "react";
import classes from "./HomePageShop.module.css";
import imageEffect from "../functions/ImageEffect.js";
import { element } from "prop-types";

function HomePageShop(){

    const image = imageEffect();
    const [hoveredImage, setHoveredImage] = useState(null);


    return(
        <div className={classes.homeshop}>
            <div className={classes.shopHeading}>
                <h3>Shop by</h3>
            <   h1>Sport</h1>
            </div>
            <div className={classes.imageContainer}>
                {hoveredImage!= null ? <img src={`images/${hoveredImage}`} alt={hoveredImage} /> : image}
            </div>
            <div className={classes.items}>
                <Link name="boxing.webp" to="/shop" className={classes.item}
                onMouseEnter={() => setHoveredImage("boxing.webp")} onMouseLeave={() => setHoveredImage(null)}>
                <label>Boxing</label>
                </Link>

                <Link name="muay_thai.jpeg" to="/shop" className={classes.item}
                 onMouseEnter={() => setHoveredImage("muay_thai.jpeg")} onMouseLeave={() => setHoveredImage(null)}>
                <label>Muay-Thai</label>
                </Link>

                <Link name="bjj.jpg" to="/shop" className={classes.item}
                 onMouseEnter={() => setHoveredImage("bjj.jpg")} onMouseLeave={() => setHoveredImage(null)}>
                <label>BJJ</label>
                </Link>

                <Link name="mma.jpg" to="/shop" className={classes.item}
                 onMouseEnter={() => setHoveredImage("mma.jpg")} onMouseLeave={() => setHoveredImage(null)}>
                <label>MMA</label>  
                </Link>
            </div>
        </div>
    )
}

export default HomePageShop;