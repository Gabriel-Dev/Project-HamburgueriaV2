import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import { Button } from "../button";
import { Div } from "./style";

export function Total() {
  const { addCart, setAddCart } = useContext(cartContext)

  return (
    <Div>
      <span></span>
      <div>
        <h4>Total</h4>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(addCart.reduce((total, { price }) => total + price, 0))}
        </p>
      </div>
      <Button onClick={() => { setAddCart([]) }} type="button" name="Remover todos" />
    </Div>
  );
}
