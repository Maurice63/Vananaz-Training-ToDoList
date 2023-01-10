import { IconButtonProps } from './types'
import { IconButtonStyled } from './elements'


const IconButton = ({children,onClick,bType,bsize,bShape,fontColor,color,disabled}: IconButtonProps) => {
    
  return (
    <IconButtonStyled 
    onClick={onClick} 
    bType={bType}
    bShape={bShape}
    bsize={bsize}
    fontColor={fontColor}
    color={color}
    disabled={disabled}>
    {children}
    </IconButtonStyled>
  )
}

export default IconButton