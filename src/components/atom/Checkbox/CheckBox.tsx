import React from 'react'
import { CheckBoxProps } from './types'
import { CheckBoxStyle } from './elements'

const CheckBox = ({onChange,checked}: CheckBoxProps) => {
  return (
    <CheckBoxStyle 
    onChange={onChange} 
    checked={checked}/>
  )
}

export default CheckBox