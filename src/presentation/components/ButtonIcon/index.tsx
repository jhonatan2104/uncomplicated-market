import theme from '@/presentation/theme'
import React from 'react'
import { View, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import TextRoboto from '../TextRoboto'

type Props = {
  bg: string
  textColor?: string
  title: string
  children: React.ReactNode
  disabled?: boolean | undefined
  isLoading?: boolean
}

const ButtonIcon: React.FC<Props & TouchableOpacityProps> = (props: Props & TouchableOpacityProps) => {
  const { bg, textColor, title, onPress, disabled, isLoading, children } = props

  if (disabled) {
    return <View />
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: bg,
        height: 55,
        width: 307,
        borderRadius: 32,
        flexDirection: 'row',
        alignItems: 'center'
      }}
      {...{ onPress }}>
      <View
        style={{
          position: 'absolute',
          left: 24,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {children}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TextRoboto weight='Bold' size={20} color={textColor ?? theme.colorsBase.white}>
          {title}
        </TextRoboto>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonIcon
