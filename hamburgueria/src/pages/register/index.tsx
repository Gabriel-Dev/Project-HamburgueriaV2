import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { userContext } from "../../contexts/userContext";
import { Container } from "./style";
import { IRegisterValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";

export function Register() {
    const { registerSubmit } = useContext(userContext)

    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm<IRegisterValues>({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    console.log(touchedFields)
    return (
        <Container>
            <Logo />
            <form onSubmit={handleSubmit(registerSubmit)} noValidate>
                <div>
                    <h3>Cadastro</h3>
                    <Link to={"/login"}>Retornar pra o login</Link>
                </div>

                <Input name="name" type="text" placeholder="Digite seu nome"
                    label="Nome" register={register("name")} className={touchedFields.name ? errors.name ? "red" : "green" : ""} />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <Input name="email" type="email" placeholder="Digite seu email"
                    label="Email" register={register("email")} className={touchedFields.email ? errors.email ? "red" : "green" : ""} />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <Input name="password" type="password" placeholder="Digite sua senha"
                    label="Senha" register={register("password")} className={touchedFields.password ? errors.password ? "red" : "green" : ""} />
                {errors.password && <p className="error">{errors.password.message}</p>}

                <Input name="confirmPassword" type="password" placeholder="Confirme sua senha"
                    label="Confirme sua Senha" register={register("confirmPassword")} className={touchedFields.confirmPassword ? errors.confirmPassword ? "red" : "green" : ""} />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

                <Button type="submit" name="Cadastrar" />
            </form>
        </Container>
    )
}
