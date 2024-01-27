

// eslint-disable-next-line react/prop-types, no-unused-vars
const CartItem = ({item,onUpdateCart,onRemoveCart}) => {
  return (
    <>
      <div className="cart-item" key={item.id}   >
            {/*  eslint-disable-next-line react/prop-types */}
            <p>{item.name} - {item.quantity}</p>
            {/*  eslint-disable-next-line react/prop-types */}
            <img src={item.image} alt={item.name} width="300px"  />
            {/*  eslint-disable-next-line react/prop-types */}
            <p>${item.price}</p>
              {/*  eslint-disable-next-line react/prop-types */}
              <div className="cart-buttons">
                <input type="number" value={item.quantity}  onChange={(e) => onUpdateCart(item,e.target.value)}/>
                <button  onClick={()=> onRemoveCart(item)} >Remover</button>
              </div>
          </div>
    </>

  )
}

export default CartItem