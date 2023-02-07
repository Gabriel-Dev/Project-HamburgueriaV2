import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginValues } from "../../pages/login/types";
import { IRegisterValues } from "../../pages/register/types";
import { api } from "../../services/api";
import { IProduct } from "../cartContext/types";
import { IUserContext, IUserContextProps } from "./types";

export const userContext = createContext({} as IUserContext)

export function UserProvider({ children }: IUserContextProps) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [color, setColor] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        async function getProducts(): Promise<void> {
            const token = window.localStorage.getItem("token");

            if (!token) {
                setLoading(false)
                return;
            }

            try {
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`
                const response = await api.get<IProduct[]>(`/products`);
                setProducts(response.data);
            }

            catch (error) {
                console.log(error);
            }

            finally {
                setLoading(false);
            }
        }
        getProducts();

    }, [navigate]);

    async function registerSubmit(data: IRegisterValues): Promise<void> {

        try {
            await api.post("/users", data);
            toast.success("Usuario cadastrado com sucesso", {
                toastId: "yes",
            });

            navigate("/login");

        } catch (error) {
            toast.error("Algo deu errado", {
                toastId: "yes",
            });
        }
    }

    async function loginSubmit(data: ILoginValues): Promise<void> {
        try {
            const response = await api.post("/login", data);

            window.localStorage.clear();
            window.localStorage.setItem("token", response.data.accessToken)

            toast.success("Usuario logado com sucesso", {
                toastId: "yes",
            });

            setLoading(true)
            navigate("/home");

        } catch (error) {
            toast.error("Email ou senha incorreto", {
                toastId: "yes",
            });
        }
    }

    return (
        <userContext.Provider value={{
            registerSubmit, loginSubmit, loading, products,
            navigate, setColor, color
        }}>
            {children}
        </userContext.Provider>)
}