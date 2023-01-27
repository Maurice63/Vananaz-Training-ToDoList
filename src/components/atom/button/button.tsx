import { ButtonProps } from "./types";
import { ButtonStyle } from "./elements";

const Button = ({label,bType,onClick,style,bsize,disabled,preset,...props}: ButtonProps) => {
  return (
    <ButtonStyle 
    label={label} 
    bType={bType}
    disabled={disabled}
    bsize={bsize}
    onClick={onClick}
    style={style}
    preset={preset}
    {...props}
    >
    {label}
    </ButtonStyle>
  )
}

export default Button;