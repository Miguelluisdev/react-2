import { useEffect } from "react"
import CartItem from "./CartItem"
// eslint-disable-next-line react/prop-types
const Cart = ({cartItems , onUpdateCart}) => {
  useEffect(() => {
    localStorage.setItem("product" , JSON.stringify(cartItems))
  }, [cartItems])
  return (
    <>
  {cartItems.length === 0 
    ? <p>não há items no carrinho</p> 
    : <div>
        {cartItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <CartItem item={item} onUpdateCart={onUpdateCart} key={item.id} />
        ))}
    </div> 
  }
    </>
  )
}

export default Cart