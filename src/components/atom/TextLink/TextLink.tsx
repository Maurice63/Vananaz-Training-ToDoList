import React from 'react'
import { TextLinkStyled } from './elements'
import { TextLinkProps } from './types'


const TextLink = ({onClick,text,style}: TextLinkProps) => {
  return (
    <TextLinkStyled 
    onClick={onClick} 
    style={style}>
        {text}
    </TextLinkStyled>
  )
}

export default TextLink