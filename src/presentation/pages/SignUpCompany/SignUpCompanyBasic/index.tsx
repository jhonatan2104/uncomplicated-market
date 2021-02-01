/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useCallback, useEffect, useRef } from 'react'
import { View, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { useTheme } from '@/presentation/hooks/use-theme'

import { Input, BackgroundCircle, ButtonCircular, TextRoboto } from '@/presentation/components'
import { Container } from '@/presentation/components/styled'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { toMaskCnpj, toUnmaskedCnpj } from '@/presentation/utils'
import { useNavigation } from '@react-navigation/native'

type FormValues = {
  name: string
  cnpj: string
  email: string
}

export type ParamsExportNavigation = {
  name: string
  cnpj: string
  email: string
}

const SignUpCompanyBasic: React.FC = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const refFormik = useRef<any>(null)

  useEffect(() => {
    refFormik.current.validateForm()
  }, [])

  const schemaCompanyBasic = Yup.object().shape({
    name: Yup.string().required(),
    cnpj: Yup.string()
      .test(
        'cnpj',
        'cnpj inválido',
        (value): any => (
          value && value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/))
      )
      .required(),
    email: Yup.string().required().email()
  })

  const initValues: FormValues = {
    name: '',
    cnpj: '',
    email: ''
  }

  const alertFormInvalid = useCallback(() => {
    Alert.alert('Acho que esqueceu alguma coisa!', 'Preencha os campos para nos conhecermos melhor :)')
  }, [])

  const navigateBack = useCallback(() => {
    navigation.goBack()
  }, [])

  const navigationToAccessCode = useCallback((values: FormValues): void => {
    const companyParams: ParamsExportNavigation = {
      ...values,
      name: values.name.trim(),
      cnpj: toUnmaskedCnpj(values.cnpj)
    }
    navigation.navigate('SignUpCompanyPassword', { companyParams })
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
            <MaterialIcons name="shopping-cart" size={83} color={theme.primary} />
            <View style={{
              marginTop: 30
            }}>
              <TextRoboto>Nome</TextRoboto>
              <Input
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder='Digite seu nome'
              />
            </View>
            <View style={{
              marginTop: 8
            }}>
              <TextRoboto>CNPJ</TextRoboto>
              <Input
                value={values.cnpj}
                onChangeText={(e) => handleChange('cnpj')(toMaskCnpj(e))}
                onBlur={handleBlur('cnpj')}
                keyboardType='phone-pad'
                placeholder='Digite seu cnpj'
              />
            </View>
            <View style={{
              marginTop: 8
            }}>
              <TextRoboto>Email</TextRoboto>
              <Input
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType='email-address'
                placeholder='Digite seu email'
              />
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20
            }}>
              <ButtonCircular
                bg={theme.primary}
                onPress={navigateBack}
                isValid
              >
                <MaterialIcons name="arrow-back" size={28} color={theme.textLight} />
              </ButtonCircular>
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

export default SignUpCompanyBasic
