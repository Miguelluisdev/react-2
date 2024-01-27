import { useEffect } from "react"
import CartItem from "./CartItem"
import CheckoutBtn from "./CheckoutBtn"
// eslint-disable-next-line react/prop-types
const Cart = ({cartItems , onUpdateCart, onRemoveCart , setCartItem }) => {

  useEffect(() => {
    localStorage.setItem("product" , JSON.stringify(cartItems))
  }, [cartItems])

  const totalPrice = cartItems.reduce(
    (total,item) =>  total + item.price * item.quantity,0 
    )

  return (
    <>
  {cartItems.length === 0 
    ? <p>não há items no carrinho</p> 
    : <div>
        {cartItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <CartItem item={item} onUpdateCart={onUpdateCart} key={item.id} onRemoveCart={onRemoveCart}  />
        ))}
        <div className="total" >
          <p>Total: ${totalPrice}</p>
          <CheckoutBtn  cartItems={cartItems}   setCartItem={setCartItem} />
        </div>
    </div> 
  }
    </>
  )
}

export default Cart