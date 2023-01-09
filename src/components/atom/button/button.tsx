import { ButtonProps } from './types';
import { ButtonStyle } from './elements';

const Button = (props: ButtonProps) => {
    const {label} = props;
  return (
    <ButtonStyle {...props}>{label}</ButtonStyle>
  )
}

export default Button;