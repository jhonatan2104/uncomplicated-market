import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  makeChangeRegistration,
  makeSingUpCompany,
  makeSingUpCooperator,
  makeSingUpCompanyPassword,
  makeSingUpCompanyAccessCode,
  makeSingUpCooperatorPassword,
  makeSingUpCooperatorVerifyCode,
  makeLogin,
  makeHome,
  makeSplash
} from '@/main/factories/pages'

const Stack = createStackNavigator()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Splash' component={makeSplash}/>
        <Stack.Screen name='Login' component={makeLogin}/>
        <Stack.Screen name='Home' component={makeHome}/>
        <Stack.Screen name='ChangeRegistration' component={makeChangeRegistration}/>
        <Stack.Screen name='SignUpCooperator' component={makeSingUpCooperator}/>
        <Stack.Screen name='SignUpCooperatorPassword' component={makeSingUpCooperatorPassword}/>
        <Stack.Screen name='SignUpCooperatorVerifyCode' component={makeSingUpCooperatorVerifyCode}/>
        <Stack.Screen name='SignUpCompany' component={makeSingUpCompany}/>
        <Stack.Screen name='SignUpCompanyPassword' component={makeSingUpCompanyPassword}/>
        <Stack.Screen name='SignUpCompanyAccessCode' component={makeSingUpCompanyAccessCode}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
