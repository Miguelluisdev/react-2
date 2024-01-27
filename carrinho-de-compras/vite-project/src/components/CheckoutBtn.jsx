// eslint-disable-next-line react/prop-types
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CheckoutBtn = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      toast.success("Compra finalizada com sucesso");
      navigate("/thanks", { state: { cartItems } });
    } else {
      toast.error("Seu carrinho está vazio");
    }
  };

  return (
    <button onClick={handleCheckout}>Finalizar compra</button>
  );
};

export default CheckoutBtn;