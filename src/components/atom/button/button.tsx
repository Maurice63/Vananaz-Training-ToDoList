import { ButtonProps } from "./types";
import { ButtonStyle } from "./elements";

const Button = ({label,bType,color,onClick,style,bsize,disabled,preset,...props}: ButtonProps) => {
  return (
    <ButtonStyle 
    label={label} 
    bType={bType}
    disabled={disabled}
    bsize={bsize}
    color={color}
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