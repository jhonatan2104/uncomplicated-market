import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = {
  bg: string
  size?: number
  children: React.ReactNode
}

const ButtonCircular: React.FC<Props & TouchableOpacityProps> = (props: Props & TouchableOpacityProps) => {
  const { bg, size, children } = props
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: bg,
        height: size ?? 65,
        width: size ?? 65,
        borderRadius: size ?? 65,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {children}
    </TouchableOpacity>
  )
}

export default ButtonCircular
