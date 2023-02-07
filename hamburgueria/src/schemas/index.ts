import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Esse campo é obrigatório!"),

  email: yup.string().required("Esse campo é obrigatório!").email("Informe um email válido"),

  password: yup.string().required("Esse campo é obrigatório!")
    .matches(/(?=.*[a-z])/, "A senha deve conter 1 letra minúscula")
    .matches(/(?=.*[A-Z])/, "A senha deve conter 1 letra maiúscula")
    .matches(/(?=.*?[0-9])/, "A senha deve conter 1 dígito")
    .matches(/(?=.*?[#?!@$%^&*-])/, "A senha deve conter 1 caractere especial")
    .matches(/.{8,}/, "A senha deve conter pelo menos 8 caracteres"),

  confirmPassword: yup.string().required("Esse campo é obrigatório!")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("Esse campo é obrigatório!"),

  password: yup.string().required("Esse campo é obrigatório!")
});

