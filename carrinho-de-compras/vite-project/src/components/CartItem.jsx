

// eslint-disable-next-line react/prop-types, no-unused-vars
const CartItem = ({item,onUpdateCart}) => {
  return (
    <>
      <div className="cart-items" key={item.id}   >
            {/*  eslint-disable-next-line react/prop-types */}
            <p>{item.name} - {item.quantity}</p>
            {/*  eslint-disable-next-line react/prop-types */}
            <img src={item.image} alt={item.name} width="300px"  />
            {/*  eslint-disable-next-line react/prop-types */}
            <p>${item.price}</p>
           
              {/*  eslint-disable-next-line react/prop-types */}
              <input type="number" value={item.quantity}  onChange={(e) => onUpdateCart(item,e.target.value)}/>
              <button >Remover</button>
      
          </div>
    </>

  )
}

export default CartItem