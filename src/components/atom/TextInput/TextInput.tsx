import React from 'react'
import { TextInputStyle } from './elements'
import { TextInputProps } from './types'


const TextInput = ({disabled,prefix,placeholder,allowClear,onChange,onPressEnter,hidden,value,style}: TextInputProps) => {
  return (
    <TextInputStyle
    disabled={disabled}
    prefix={prefix}
    placeholder={placeholder}
    allowClear={allowClear}
    onChange={onChange}
    onPressEnter={onPressEnter}
    hidden={hidden}
    value={value}
    style={style}
    />
  )
}

export default TextInput