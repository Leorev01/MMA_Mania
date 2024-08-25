import { Link } from "react-router-dom";

function ErrorPage(){
    return(
        <>
            <h1>Page Not Found</h1>
            <p>The page you are trying to access does not exist</p>
            <p><Link to="/">Return Home</Link></p>
        </>
    )
}

export default ErrorPage;