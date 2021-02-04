import { useTheme } from '@/presentation/hooks/use-theme'
import { getAccount } from '@/presentation/store/system/selectors'
import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const Home: React.FC = () => {
  const account = useSelector(getAccount)
  const theme = useTheme()
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>{account?.name}</Text>
    </View>
  )
}

export default Home
