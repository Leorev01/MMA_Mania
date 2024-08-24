import classes from "./HomePage.module.css";
import HomePageShop from "./HomePageShop";

function HomePage(){

    return(
        <div className={classes.container}>
            <div className={classes.heading}>
                <h3>Welcome to</h3>
                <h1>MMA Mania</h1>
            </div>
            <HomePageShop/>
        </div>
    );
}

export default HomePage;