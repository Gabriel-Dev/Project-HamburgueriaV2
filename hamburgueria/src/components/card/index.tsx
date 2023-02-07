import { IProduct } from "../../contexts/cartContext/types";
import { Button } from "../button";
import { Li } from "./style";

interface ICardProps {
  product: IProduct
  onClick: any
}

export function Card({ product: { name, category, price, img }, onClick }: ICardProps) {
  return (
    <Li>
      <span>
        <img src={img} alt={name} />
      </span>
      
      <div>
        <h3>{name}</h3>
        <small>{category}</small>
        <p> {new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(price)} </p>
        <Button onClick={onClick} type="button" name="Adicionar" />
      </div>
    </Li>
  );
}

