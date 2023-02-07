import { ILoginValues } from "../../pages/login/types"
import { IRegisterValues } from "../../pages/register/types"
import { IProduct } from "../cartContext/types"

export interface IUserContext {
    registerSubmit(data: IRegisterValues): Promise<void>
    loginSubmit(data: ILoginValues): Promise<void>
    loading: boolean
    products: IProduct[]
    navigate: any
    setColor: React.Dispatch<React.SetStateAction<boolean>>
    color: boolean
}

export interface IUserContextProps {
    children: React.ReactNode;
}