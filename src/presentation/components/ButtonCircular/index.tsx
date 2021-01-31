import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import theme from '@/presentation/theme'

type Props = {
  bg: string
  size?: number
  children: React.ReactNode
  isValid?: boolean
  onDisable?: () => void
}

const ButtonCircular: React.FC<Props & TouchableOpacityProps> = (props: Props & TouchableOpacityProps) => {
  const { bg, size, children, isValid, onPress, onDisable } = props
  return (
    <TouchableOpacity
      onPress={(e) => {
        if (isValid && onPress) { onPress(e) } else {
          if (onDisable) onDisable()
        }
      }}
      activeOpacity={0.7}
      style={{
        backgroundColor: isValid ? bg : theme.colorsBase.gray,
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
