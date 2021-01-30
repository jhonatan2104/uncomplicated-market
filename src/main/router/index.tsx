import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { makeChangeRegistration } from '@/main/factories/pages'

const Stack = createStackNavigator()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='ChangeRegistration' component={makeChangeRegistration}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
