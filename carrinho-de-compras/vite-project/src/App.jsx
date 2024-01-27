import {BrowserRouter , Routes , Route ,Link} from "react-router-dom"
import Catalogo  from "./components/Catalogo"
import Cart from "./components/Cart"
import './App.css'
import Thanks from "./components/Thanks"
import { useState } from "react"
import {ToastContainer , toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function App() {
  const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem("product")) || [])

  const handleAddCart = (product , quantity) => {

    setCartItem((prevItens) => {
      const itemExist = prevItens.find((item) => item.id === product.id)
      if (itemExist){
        toast.info(`${product.name} quantidade atualizada ${quantity}`)
          return prevItens.map((item)=> item.id === product.id ? {...item , quantity: item.quantity + quantity }: item)
      } else {
        toast.success(`${product.name} adicionado com sucesso ao carrinho ${quantity}`)
        return [...prevItens , {...product , quantity}]
      }
    })
    localStorage.setItem("products" , JSON.stringify(cartItem) )
  }

  const handleUpdateCart = (product , quantity) => {
    toast.info(`${product.name} quantidade atualizada ${quantity}`)
    setCartItem((prevItens) => {
      return prevItens.map((item) => item.id === product.id ? {...item , quantiy: +quantity} : item)
    })
    localStorage.setItem("products" , JSON.stringify(cartItem) )
  }

  return (
    < BrowserRouter  >
   <nav>
      <Link to="/" >Catalogo</Link>
      <Link to="/cart" >Carrinho</Link>
    </nav>
    <div className="container" >
      <Routes>
        < Route path="/" element={<Catalogo onAddToCart={handleAddCart} />} />
        < Route path="/cart" element={<Cart cartItems={cartItem}  onUpdateCart={handleUpdateCart} />} />
        < Route  path="/thanks" element={<Thanks/>} />
      </Routes>
    </div>
    <ToastContainer  
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
    />
    </BrowserRouter>
  )
}

export default App
