import { useState , useEffect  } from "react"
import productsData from "../data/products_mock.json"
import Product from "./Product"


// eslint-disable-next-line react/prop-types
const Catalogo = ({onAddToCart}) => {

  return (
    <>
    <h1>Catalogo de Produtos</h1>
    <div className="product-container" >
      {productsData.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
    
    </>
  )
}

export default Catalogo