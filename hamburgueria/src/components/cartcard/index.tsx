import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import { IProduct } from "../../contexts/cartContext/types";
import { userContext } from "../../contexts/userContext";
import { Button } from "../button";
import { Li } from "./style";

interface ICartCardProps {
  product: IProduct
  onClick?: any
}

export function CartCard({ product: { id, name, category, img }, onClick }: ICartCardProps) {

  const { addCart, setAddCart } = useContext(cartContext)
  const { products } = useContext(userContext)

  return (
    <Li>
      <span>
        <img src={img} alt={name} />
      </span>

      <span>
        <h4>{name}</h4>
        <small>{category}</small>
      </span>

      <div className="counter">
        <button type="button" onClick={() => { setAddCart([...addCart, products.find((product) => product.id === id)!]) }}>+</button>

        <p>{addCart.filter((e) => e.id === id).length}</p>

        <button type="button" onClick={onClick}>-</button>
      </div>

      <Button onClick={onClick} type="button" name="Remover" />
    </Li>
  );
}
