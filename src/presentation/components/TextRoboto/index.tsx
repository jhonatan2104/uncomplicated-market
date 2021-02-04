/* eslint-disable react/prop-types */
import React from 'react'
import { Text, TextProps } from 'react-native'
import theme from '@/presentation/theme'

const bold = 'Bold'
const black = 'Black'
const medium = 'Medium'
const regular = 'Regular'
const light = 'Light'

const auto = 'auto'
const left = 'left'
const right = 'right'
const center = 'center'
const justify = 'justify'

export type Props = {
  weight?: typeof bold | typeof black | typeof medium | typeof regular | typeof light
  color?: string
  size?: number
  align?: typeof auto | typeof left | typeof right | typeof center | typeof justify
}

const TextRoboto: React.FC<Props & TextProps> = (props) => {
  const { weight, color, size, align }: Props = props
  return (
    <Text
      {...props}
      style={{
        fontFamily: `Roboto-${weight ?? regular}`,
        color: color ?? theme.colorsBase.darkBlue,
        fontSize: size ?? 20,
        textAlign: align ?? auto
      }}
    />
  )
}

export default TextRoboto
