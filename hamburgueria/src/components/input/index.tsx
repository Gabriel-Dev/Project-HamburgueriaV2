import { Label } from "./style";

interface IInputProps {
  register: any,
  type: "text" | "email" | "password" | "number",
  name: string,
  label?: string
  placeholder: string
  className?: string
}

export function Input({ register, type, name, label, placeholder, className }: IInputProps) {

  return (
    <Label> <span>{label}</span>
      <input name={name} type={type} placeholder={placeholder} {...register} className={className} />
    </Label>
  );


}


