import { Dispatch, SetStateAction } from "react";
import { ISearchValues } from "../../components/header";

export interface ICartContextProps {
    children: React.ReactNode;
}

export interface ICartContext {
    filter: IProduct[],
    found: string,
    addCart: IProduct[]
    setAddCart: Dispatch<SetStateAction<IProduct[]>>
    search({ search }: ISearchValues): void
    logout(): void
    setCart: Dispatch<SetStateAction<boolean>>
    cart: boolean
    setInputSearch: Dispatch<SetStateAction<boolean>>
    inputSearch: boolean
}

export interface IProduct {
    id: number,
    name: string,
    category: "Sanduíches" | "Bebidas"
    price: number,
    img: string
}