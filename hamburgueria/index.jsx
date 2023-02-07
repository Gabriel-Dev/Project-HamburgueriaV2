import { Card } from "../card";
import { Section } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Products({ found, products, filter, addCart, add }) {
  function toasty(product) {
    addCart.filter(({ id }) => product.id === id).length
      ? toast.warn("Esse produto já está no carrinho", {
          toastId: "yes",
        })
      : add(product.id);
  }

  return (
    <Section>
      {found && (
        <h1>
          Resultado para: <span>{found}</span>
        </h1>
      )}
      <ul>
        {found
          ? ""
          : products.map((product, index) => (
              <Card
                key={index}
                product={product}
                onClick={() => {
                  toasty(product);
                }}
              />
            ))}
        {found ? (
          filter.length !== 0 ? (
            filter.map((product, index) => (
              <Card
                key={index}
                product={product}
                onClick={() => {
                  toasty(product);
                }}
              />
            ))
          ) : (
            <h2>Nenhum produto encontrado</h2>
          )
        ) : (
          ""
        )}
      </ul>
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        limit={1} />
    </Section>
  );
}
