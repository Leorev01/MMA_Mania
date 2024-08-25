import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useRef} from "react";
import HomePage from "./pages/HomePage";
import MainShop /*{shopLoader}*/ from "./pages/MainShop";
import RootLayout from "./pages/RootLayout";
import ShopLayout from "./pages/ShopLayout";
import ProductPage from "./pages/ProductPage.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
    {path:'/', element: <RootLayout/>, children: [
        {path:'/', element: <HomePage/>},
        {path:'/shop', element: <ShopLayout />, children: [
            {index:true, element: <MainShop/>, /*loader: shopLoader*/}
        ]},
        {path:'/shop/:productId', element: <ProductPage/>},
        {path:'/checkout', element: <CheckoutPage/>},
        {path:'/about', element: <AboutPage/>},
        {path:'/contact', element: <ContactPage/>},
        {path:'*', element: <ErrorPage/>}
    ]},
    /*{path:'/shop', element:<Shop/>, children:[
        {path:'/shop:item', element: <ShopItem/>}
    ]}*/
])

function App(){

    const modalRef = useRef();

    return(
        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
    )
}

export default App;