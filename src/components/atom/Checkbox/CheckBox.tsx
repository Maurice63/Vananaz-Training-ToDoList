import React from 'react'
import { CheckBoxProps } from './types'
import { CheckBoxStyle } from './elements'

const CheckBox = (props: CheckBoxProps) => {
  return (
    <CheckBoxStyle {...props}></CheckBoxStyle>
  )
}

export default CheckBox