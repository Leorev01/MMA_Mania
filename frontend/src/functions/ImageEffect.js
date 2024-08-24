import { useEffect, useState } from "react";

const boxing = <img src="images/boxing.webp"></img>
const muay_thai = <img src="images/muay_thai.jpeg"></img>
const bjj = <img src="images/bjj.jpg"></img>
const mma = <img src="images/mma.jpg"></img>

const images = [boxing, muay_thai, bjj, mma];

export default function imageEffect(){
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
        const interval =setInterval(() => {
            if(index === 3){
                setIndex(0);
            }
            else{
                setIndex(index + 1);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [index])
    return(
        
        images[index]
    );
}
