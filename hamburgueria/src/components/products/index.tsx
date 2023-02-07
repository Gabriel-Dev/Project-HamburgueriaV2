import { Card } from "../card";
import { Section } from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import { userContext } from "../../contexts/userContext";
import { IProduct } from "../../contexts/cartContext/types";

export function Products() {

  const { found, filter, addCart, setAddCart } = useContext(cartContext)
  const { products } = useContext(userContext)

  function toasty(product: IProduct) {
    setAddCart([...addCart, products.find(({ id }) => product.id === id)!]);

    addCart.filter(({ id }) => product.id === id).length &&
      toast.warn("Esse produto já está no carrinho", {
        toastId: "yes",
      })
  }

  return (
    <Section>
      {found && <h1>Resultado para: <span>{found}</span></h1>}

      <ul>
        {!found &&
          products.map((product, index) =>
            <Card key={index} product={product} onClick={() => { toasty(product) }} />
          )}

        {found ? filter.length !== 0 ?
          filter.map((product, index) =>
            <Card key={index} product={product} onClick={() => { toasty(product) }} />

          ) : <h2>Nenhum produto encontrado</h2>
          : ""
        }
      </ul>
    </Section>
  );
}
