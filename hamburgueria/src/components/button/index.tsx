import { StyledButton } from "./style";

interface IButtonProps {
  type?: "button" | "submit",
  name?: string,
  onClick?: any,
  children?: React.ReactNode
}

export function Button({ type, name, onClick, children }: IButtonProps) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {name}
      {children}
    </StyledButton>
  );
}
