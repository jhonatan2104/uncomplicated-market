import React from 'react'
import { TextInputProps } from 'react-native'
import { InputStyled } from './styles'

const Input: React.FC<TextInputProps> = (props: TextInputProps) => {
  return (
    <InputStyled {...props}/>
  )
}

export default Input
