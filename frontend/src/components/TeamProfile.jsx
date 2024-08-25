import classes from "../pages/AboutPage.module.css";

export default function TeamProfile({name, image, description}){
    return(
        <div className={classes.person}>
            <h1>{name}</h1>
            <img src={image} alt={`${name} picture`}/>
            <p>{description}</p>
        </div>
    )
}