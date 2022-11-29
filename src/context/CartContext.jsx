import React, {useState, createContext} from "react";
export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    console.log('carrito', cart)
    
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }
    
    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    const clearCart = () => setCart([])
    const isInCart = (id) =>cart.find(product => product.id === id) ? true  : false
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
    
    const getProductQuantity = (id) => {
        const cantidadItems = cart.find((product) => product.id === id)
        return cantidadItems?.cantidad
    }

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            addProduct,
            removeProduct,
            totalPrice,
            totalProducts,
            getProductQuantity,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider