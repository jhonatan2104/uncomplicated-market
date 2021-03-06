import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator, View } from 'react-native'
import theme from '@/presentation/theme'

type Props = {
  bg: string
  size?: number
  children: React.ReactNode
  isValid?: boolean
  isLoading?: boolean
  onDisable?: () => void
}

const ButtonCircular: React.FC<Props & TouchableOpacityProps> = (props: Props & TouchableOpacityProps) => {
  const { bg, size, children, isValid, onPress, onDisable, isLoading } = props
  return (
    <View style={{
      height: size ?? 65,
      width: size ?? 65,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {isLoading ? (
        <ActivityIndicator size={30} color={bg} />
      ) : (
        <TouchableOpacity
          onPress={(e) => {
            if (isValid && onPress) { onPress(e) } else {
              if (onDisable) onDisable()
            }
          }}
          activeOpacity={0.7}
          style={{
            backgroundColor: isValid ? bg : theme.colorsBase.gray,
            height: '100%',
            width: '100%',
            borderRadius: size ?? 65,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          {children}
        </TouchableOpacity>
      )}
    </View>
  )
}

export default ButtonCircular
