import { createContext, useContext, useState } from "react";
import { ISearchValues } from "../../components/header";
import { userContext } from "../userContext";
import { ICartContext, ICartContextProps, IProduct } from "./types";

export const cartContext = createContext({} as ICartContext)

export function CartProvider({ children }: ICartContextProps) {
    const { products, navigate } = useContext(userContext)
    const [addCart, setAddCart] = useState<IProduct[]>([]);
    const [cart, setCart] = useState(false);
    const [inputSearch, setInputSearch] = useState(false);
    const [found, setFound] = useState<string>("");
    const [filter, setFilter] = useState<IProduct[]>([]);

    function search({ search }: ISearchValues): void {
        setFilter(products.filter(({ name, category }) =>
            name.toLowerCase().includes(search.toLowerCase()) ||
            category.toLowerCase().includes(search.toLowerCase())
        ))
        setFound(search)
    }

    function logout(): void {
        window.localStorage.clear()
        navigate("/login")
    }

    return (
        <cartContext.Provider value={{
            found, filter, addCart, setAddCart, search, logout,
            setCart, cart, setInputSearch, inputSearch
        }}>
            {children}
        </cartContext.Provider>
    )
}