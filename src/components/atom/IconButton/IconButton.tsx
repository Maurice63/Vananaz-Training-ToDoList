import { IconButtonProps } from './types'
import { IconButtonStyled } from './elements'


const IconButton = ({children,onClick,bType,bsize,bShape,fontColor,color,disabled,onBlur,style}: IconButtonProps) => {
    
  return (
    <IconButtonStyled 
    onClick={onClick} 
    bType={bType}
    bShape={bShape}
    bsize={bsize}
    fontColor={fontColor}
    color={color}
    disabled={disabled}
    onBlur={onBlur}
    style={style}>
    {children}
    </IconButtonStyled>
  )
}

export default IconButton