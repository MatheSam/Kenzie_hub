import { ContainerButton } from "./style"

const Button = ({ children, color, ...rest }) => {
  return <ContainerButton color={color} type="button" {...rest}>
    {children}
  </ContainerButton>
}

export default Button