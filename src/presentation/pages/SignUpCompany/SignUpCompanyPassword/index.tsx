/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useCallback, useEffect, useRef } from 'react'
import { View, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { useTheme } from '@/presentation/hooks/use-theme'

import { InputPassword, BackgroundCircle, ButtonCircular, TextRoboto } from '@/presentation/components'
import { Container } from '@/presentation/components/styled'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { useNavigation, useRoute } from '@react-navigation/native'

type FormValues = {
  password: string
  passwordConfirmation: string
}

export type ParamsExportNavigation = {
  name: string
  cnpj: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpCompanyPassword: React.FC = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const refFormik = useRef<any>(null)

  useEffect(() => {
    refFormik.current.validateForm()
  }, [])

  const { companyParams }: any = route.params

  console.log('companyParams', companyParams)

  const schemaCompanyBasic = Yup.object().shape({
    password: Yup.string().min(6)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        'Deve conter letras maiúsculas e minúsculas'
      )
      .matches(/^(?=.*[0-9])/, 'Deve conter ao menos 1 números').required(),
    passwordConfirmation: Yup.string().when('password', (value: any, schema: any) => {
      if (value) {
        return schema.oneOf([value], 'As senhas devem corresponder').required()
      }
      return schema.notRequired()
    })
  })

  const initValues: FormValues = {
    password: '',
    passwordConfirmation: ''
  }

  const alertFormInvalid = useCallback(() => {
    Alert.alert('Queremos você seguro!', 'Sua senha precisa conter letras maiúsculas, minúsculas e um número')
  }, [])

  const navigationToAccessCode = useCallback((values: FormValues): void => {
    const companyParamsWithPassword: ParamsExportNavigation = {
      ...values,
      ...companyParams
    }
    navigation.navigate('SignUpCompanyAccessCode', { companyParams: companyParamsWithPassword })
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
            <MaterialIcons name="screen-lock-portrait" size={83} color={theme.primary} />
            <View style={{
              marginTop: 16
            }}>
              <TextRoboto
                align='center'
                weight='Medium'
                size={24}
                color={theme.textDark}
              >
                {`Olá ${companyParams.name}!`}
              </TextRoboto>
            </View>
            <View style={{
              marginTop: 8
            }}>
              <TextRoboto
                align='center'
                weight='Bold'
                size={20}
                color={theme.colorsBase.darkBlue}
              >
                Agora você pode escolher a sua senha.
              </TextRoboto>
            </View>
            <View style={{
              marginTop: 16
            }}>
              <TextRoboto>Senha</TextRoboto>
              <InputPassword
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
            </View>
            <View style={{
              marginTop: 8
            }}>
              <TextRoboto>Confirme sua senha</TextRoboto>
              <InputPassword
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={handleBlur('passwordConfirmation')}
              />
            </View>

            <View style={{
              alignItems: 'flex-end',
              width: '100%',
              marginTop: 20
            }}>
              <ButtonCircular
                bg={theme.primary}
                onPress={() => navigationToAccessCode(values)}
                onDisable={alertFormInvalid}
                {...{ isValid }}
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

export default SignUpCompanyPassword
