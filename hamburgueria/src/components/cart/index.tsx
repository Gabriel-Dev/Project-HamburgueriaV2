import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import { CartCard } from "../cartcard";
import { Total } from "../total";
import { Background } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai"

export function Cart() {
  const { addCart, setAddCart, setCart } = useContext(cartContext)

  return (
    <Background>
      <div className="modal">
        <span>
          <h3>Carrinho de compras</h3>
          <AiOutlineCloseCircle onClick={() => { setCart(false) }} />
        </span>
        <ul>
          {addCart.length !== 0 ?

            [...new Set(addCart)].map((product, index) =>
              <CartCard key={index} product={product}
                onClick={() => {
                  setAddCart(addCart.filter((e, eindex) => eindex !== index))
                }} />
            ) :

            <div className="empty">
              <h3>Sua sacola está vazia</h3>
              <small>Adicione itens</small>
            </div>
          }
        </ul>
        {addCart.length !== 0 &&
          <Total />
        }
      </div>
    </Background>
  )
}



