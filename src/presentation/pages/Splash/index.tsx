/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { StateAuth } from '@/domain/usecases/session/get-state-auth'
import { View, Animated, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { TextRoboto } from '@/presentation/components'
import { Container } from '@/presentation/components/styled'

import { useTheme } from '@/presentation/hooks/use-theme'

import { CommonActions, useNavigation } from '@react-navigation/native'

import { useDispatch } from 'react-redux'
import { actionSetAccount } from '@/presentation/store/system/actions'

type Props = {
  getStateAuth: StateAuth
}

const { width } = Dimensions.get('screen')

const Splash: React.FC<Props> = ({ getStateAuth }: Props) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const navigation = useNavigation()

  const [animatedValue] = useState(new Animated.Value(0))

  const actionAnimated = useCallback((value?: number) => {
    Animated.spring(animatedValue, {
      toValue: value ?? 1,
      useNativeDriver: false,
      mass: 1.5,
      stiffness: 60,
      damping: 12
    }).start()
  }, [])

  const navigationToHome = useCallback((account) => {
    dispatch(actionSetAccount(account))

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Home'
          }
        ]
      })
    )
  }, [])

  const navigationToLogin = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Login'
          }
        ]
      })
    )
  }, [])

  useEffect(() => {
    actionAnimated()
    setTimeout(() => {
      getStateAuth.execute().then((account) => {
        navigationToHome(account)
      })
        .catch((e: Error) => {
          console.warn(e.message)
          navigationToLogin()
        })
    }, 2000)
  }, [])

  const stylesAnimatedOpacity = useMemo((): any => ({
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1]
    })
  }), [])

  const stylesAnimatedMove = useMemo((): any => ({
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-(width + 50) / 2, 0]
        })
      }
    ]
  }), [])

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colorsBase.orange
    }}>
      <Container>
        <View style={[{
          alignItems: 'center',
          transform: [
            { translateY: -30 }
          ]
        }]}>
          <Animated.View style={stylesAnimatedMove}>
            <MaterialIcons name="shopping-cart" size={92} color={theme.colorsBase.darkBlue} />
          </Animated.View>
          <Animated.View style={stylesAnimatedOpacity}>
            <TextRoboto
              align='center'
              weight='Bold'
              color={theme.colorsBase.darkBlue} size={42}>
             Mercado Fácil
            </TextRoboto>
          </Animated.View>
        </View>

      </Container>

    </View>

  )
}

export default Splash
