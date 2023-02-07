import { useContext } from "react";
import { Cart } from "../../components/cart";
import { Header } from "../../components/header";
import { Products } from "../../components/products";
import { cartContext } from "../../contexts/cartContext";
import { Main } from "./style";

export function Home() {
    const { cart, setInputSearch } = useContext(cartContext)

    return (
        <>
            <Header />
            <Main onMouseEnter={() => { setInputSearch(false) }}>
                <Products />
                {cart && <Cart />}
            </Main>
        </>
    )
}