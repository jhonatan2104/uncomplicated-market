import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { makeChangeRegistration, makeSingUpCompany, makeSingUpCooperator, makeSingUpCompanyPassword } from '@/main/factories/pages'

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
        <Stack.Screen name='SignUpCooperator' component={makeSingUpCooperator}/>
        <Stack.Screen name='SignUpCompany' component={makeSingUpCompany}/>
        <Stack.Screen name='SignUpCompanyPassword' component={makeSingUpCompanyPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
