import { IconButtonProps } from './types'
import { IconButtonStyled } from './elements'


const IconButton = (props: IconButtonProps) => {
    const {children} = props;
    
  return (
    <IconButtonStyled {...props}>{children}</IconButtonStyled>
  )
}

export default IconButton