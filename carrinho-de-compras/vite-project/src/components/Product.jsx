import { useState } from "react"


// eslint-disable-next-line react/prop-types
const Product = ({product ,onAddToCart}) => {
  const [quantity , setQuantity] = useState(1)
  return (
    <>
      <div className="product"  >
      {/*  eslint-disable-next-line react/prop-types */}
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <div className="cart-buttons">
          <select onChange={(e) => setQuantity(e.target.value)} >
            {[...Array(10).keys()].map((x) => (
              // eslint-disable-next-line react/jsx-key
              <option key={x + 1} value={x + 1} >{x + 1}</option>
            ))}
          </select>
          <button  onClick={() => onAddToCart(product,quantity)} >Adicionar ao Carrinho</button>
        </div>
      </div>
    </>
  )
}

export default Product