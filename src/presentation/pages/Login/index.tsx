/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { useTheme } from '@/presentation/hooks/use-theme'

import { Input, InputPassword, BackgroundCircle, ButtonCircular, TextRoboto } from '@/presentation/components'
import { Container } from '@/presentation/components/styled'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { CommonActions, useNavigation } from '@react-navigation/native'
import { Auth } from '@/domain/usecases/session/auth'
import { useDispatch } from 'react-redux'
import { actionSetAccount } from '@/presentation/store/system/actions'

type FormValues = {
  email: string
  password: string
}

type Props = {
  auth: Auth
}

const Login: React.FC<Props> = ({ auth }: Props) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const refFormik = useRef<any>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    refFormik.current.validateForm()
  }, [])

  const schemaCompanyBasic = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required()
  })

  const initValues: FormValues = {
    password: '',
    email: ''
  }

  const alertFormInvalid = useCallback(() => {
    Alert.alert('Acho que esqueceu alguma coisa!', 'Preencha os campos para achamos você! :)')
  }, [])

  const navigateToCreateAccount = useCallback(() => {
    navigation.navigate('ChangeRegistration')
  }, [])

  const navigationToHome = useCallback((values: FormValues): void => {
    setLoading(true)
    auth.auth({
      email: values.email,
      password: values.password
    }).then((account) => {
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
    })
      .catch((e: Error) => {
        Alert.alert('Alguma coisa deu errado!', e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Formik
      innerRef={refFormik}
      initialValues={initValues}
      validationSchema={schemaCompanyBasic}
      validateOnChange
      onSubmit={() => {}}
    >
      {({ values, handleChange, handleBlur, isValid }) => (
        <BackgroundCircle bg={theme.colorsBase.white}>
          <Container>
            <MaterialIcons name="shopping-cart" size={83} color={theme.colorsBase.darkBlue} />
            <View style={{
              marginTop: 30
            }}>
              <TextRoboto>Email</TextRoboto>
              <Input
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder='Digite seu email'
              />
            </View>
            <View style={{
              marginTop: 8
            }}>
              <TextRoboto>Senha</TextRoboto>
              <InputPassword
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder='Digite seu senha'
              />
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20
            }}>
              <ButtonCircular
                bg={theme.colorsBase.darkBlue}
                onPress={navigateToCreateAccount}
                isValid
              >
                <MaterialIcons name="add" size={28} color={theme.textLight} />
              </ButtonCircular>
              <ButtonCircular
                bg={theme.colorsBase.orange}
                onPress={() => navigationToHome(values)}
                onDisable={alertFormInvalid}
                {...{ isValid, isLoading }}
              >
                <MaterialIcons name="arrow-forward" size={28} color={theme.textLight} />
              </ButtonCircular>
            </View>
          </Container>
        </BackgroundCircle>
      )}
    </Formik>
  )
}

export default Login
