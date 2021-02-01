import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/presentation/hooks/use-theme'

const SignUpCooperator: React.FC = () => {
  const theme = useTheme()
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.primary
    }}>
      <Text>SignUpCooperator</Text>
    </View>
  )
}

export default SignUpCooperator
