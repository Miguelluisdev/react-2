import {  useNavigate } from "react-router-dom"


const Thanks = () => {
  const navigate = useNavigate();

    
  
  return (
    <>  <div>OBRIGADO PELA COMPRA</div>
    <button onClick={() => navigate("/")}>Voltar ao Catálogo</button>
    </>
  
  )
}

export default Thanks