import { ButtonProps } from "./types";
import { ButtonStyle } from "./elements";

const Button = ({label,bType,...props}: ButtonProps) => {
  return (
    <ButtonStyle 
    label={label} 
    bType={bType}
    {...props}>
    {label}
    </ButtonStyle>
  )
}

export default Button;