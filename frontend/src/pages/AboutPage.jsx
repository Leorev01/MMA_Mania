import TeamProfile from "../components/TeamProfile";
import classes from "./AboutPage.module.css";

function AboutPage(){
    return(
        <div className={classes.aboutPage}>
            <h1>About Us</h1>

            <section>
                <h2>MMA Mania</h2>
                <p>Founded in 2022 in London</p>
                <p>Owned by Leo, Leo is the founder of MMA Mania. </p>
            </section>

            <section>
                <h2>Our Mission</h2>
                <p>To provide out customers with the best experience for the best price</p>
                <p>To be the worlds number 1 MMA retailer</p>
            </section>

            <section>
                <h2>Our Team</h2>
                <TeamProfile name="Leo" image="/images/Leo.JPG" description="CEO/Founder"/>
            </section> 
        </div>
    )
}

export default AboutPage;