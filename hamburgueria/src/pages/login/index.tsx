import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Container } from "./style";
import { ILoginValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

export function Login() {
    const { loginSubmit } = useContext(userContext)

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginValues>({
        resolver: yupResolver(loginSchema)
    })

    return (
        <Container>
            <Logo />
            <form onSubmit={handleSubmit(loginSubmit)} noValidate>
                <h3>Login</h3>
                <Input name="email" type="email" placeholder="Digite seu email"
                    label="Email" register={register("email")} />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <Input name="password" type="password" placeholder="Digite sua senha"
                    label="Senha" register={register("password")} />
                {errors.password && <p className="error">{errors.password.message}</p>}

                <Button type="submit" name="Logar" />
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <Link to={"/register"}>Cadastrar</Link>
            </form>
        </Container>
    )
}