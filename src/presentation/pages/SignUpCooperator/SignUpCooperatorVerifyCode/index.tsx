/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { useTheme } from '@/presentation/hooks/use-theme'

import { Input, BackgroundCircle, ButtonCircular, TextRoboto } from '@/presentation/components'
import { Container } from '@/presentation/components/styled'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { useNavigation, useRoute } from '@react-navigation/native'
import { CreateCooperator } from '@/domain/usecases/cooperator'

import { toMaskCnpj, toUnmaskedCnpj } from '@/presentation/utils'

type FormValues = {
  cnpj: string
  accessCode: string
}

export type ParamsExportRequest = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  cnpj: string
  accessCode: string
}

type Props = {
  createCooperator: CreateCooperator
}

const SignUpCooperatorVerifyCode: React.FC<Props> = ({ createCooperator }: Props) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const refFormik = useRef<any>(null)

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    refFormik.current.validateForm()
  }, [])

  const { cooperatorParams }: any = route.params

  const schemaCompanyBasic = Yup.object().shape({
    cnpj: Yup.string()
      .test(
        'cnpj',
        'cnpj inválido',
        (value): any => (
          value && value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/))
      )
      .required(),
    accessCode: Yup.string().min(4)
      .matches(/^(?=.*[0-9])/, 'Deve conter números')
      .required()
  })

  const initValues: FormValues = {
    cnpj: '',
    accessCode: ''
  }

  const alertFormInvalid = useCallback(() => {
    Alert.alert('Vincule-se a empresa que você trabalha', 'Para poder cadastrar uma conta como cooperador, é necessário associar-se a uma empresa.')
  }, [])

  const navigateBack = useCallback(() => {
    navigation.goBack()
  }, [])

  const navigationToAccessCode = useCallback((values: FormValues): void => {
    setLoading(true)
    const cooperatorParamsRequest: ParamsExportRequest = {
      ...cooperatorParams,
      ...values,
      cnpj: toUnmaskedCnpj(values.cnpj)
    }

    createCooperator.execute({
      name: cooperatorParamsRequest.name,
      email: cooperatorParamsRequest.email,
      password: cooperatorParamsRequest.password,
      cnpj: cooperatorParamsRequest.cnpj,
      accessCode: cooperatorParamsRequest.accessCode
    })
      .then(() => {
        Alert.alert('Seja bem vindo!')
      })
      .catch((e: Error) => {
        Alert.alert('Algo deu errado', e.message)
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
            <MaterialIcons name="screen-lock-portrait" size={83} color={theme.primary} />
            <View style={{
              marginTop: 32
            }}>
              <TextRoboto
                align='center'
                weight='Medium'
                size={24}
                color={theme.textDark}
              >
                Vincule-se a uma empresa
              </TextRoboto>
            </View>
            <View style={{
              marginTop: 40
            }}>
              <TextRoboto>CNPJ</TextRoboto>
              <Input
                value={values.cnpj}
                onChangeText={(e) => handleChange('cnpj')(toMaskCnpj(e))}
                onBlur={handleBlur('cnpj')}
              />
            </View>
            <View style={{
              marginTop: 8
            }}>
              <TextRoboto>Chave de acesso</TextRoboto>
              <Input
                value={values.accessCode}
                onChangeText={handleChange('accessCode')}
                onBlur={handleBlur('accessCode')}
                keyboardType='phone-pad'
                maxLength={4}
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
                {...{ isValid, isLoading }}
              >
                <MaterialIcons name="add" size={28} color={theme.textLight} />
              </ButtonCircular>
            </View>
          </Container>

        </BackgroundCircle>

      )}
    </Formik>

  )
}

export default SignUpCooperatorVerifyCode
