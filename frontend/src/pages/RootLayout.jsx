import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function RootLayout(){
    
    return(
        <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        </>
    )
};

export default RootLayout;