import {useState, useEffect, createContext, useContext} from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Save cart to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addItem(item){
        const index = cart.findIndex(i => i.id === item.id);
        if(index == -1){
            setCart(prevItems => [...prevItems, {...item, quantity: 1}]);
        }
        else{
            cart[index].quantity += 1;
            setCart([...cart]);
        }
    }

    function removeItem(id){
        const index = cart.findIndex(item => item.id === id);
        if(cart[index].quantity > 1){
            cart[index].quantity -= 1;
            setCart([...cart]);
            return;
        }
        setCart(prevItems => prevItems.filter(item => item.id !== id));
    }

    function clearCart(){
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}

export function useCart(){
    return useContext(CartContext);
}