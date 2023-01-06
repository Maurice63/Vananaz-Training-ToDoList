import { ButtonProps } from './types';
import { ButtonStyle } from './elements';

const Button = (props: ButtonProps) => {
    const {children} = props;
  return (
    <ButtonStyle {...props}>{children}</ButtonStyle>
  )
}

export default Button;