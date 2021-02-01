/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useCallback, useEffect, useRef } from 'react'
import { View, Alert, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { useTheme } from '@/presentation/hooks/use-theme'

import { Input, BackgroundCircle, ButtonCircular, TextRoboto } from '@/presentation/components'
import { Container } from '@/presentation/components/styled'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { useRoute, useNavigation } from '@react-navigation/native'

import { toMaskCnpj } from '@/presentation/utils'

import config from '@/presentation/config/alerts.json'

import { CreateCompany } from '@/domain/usecases/company'

type FormValues = {
  accessCode: string
}

export type ParamsExportRequest = {
  name: string
  cnpj: string
  email: string
  password: string
  passwordConfirmation: string
  accessCode: string
}

type Props = {
  createCompany: CreateCompany
}

const SignUpCompanyPassword: React.FC<Props> = ({ createCompany }: Props) => {
  const theme = useTheme()
  const route = useRoute()
  const navigation = useNavigation()
  const refFormik = useRef<any>(null)

  useEffect(() => {
    refFormik.current.validateForm()
  }, [])

  const { companyParams }: any = route.params

  const schemaCompanyBasic = Yup.object().shape({
    accessCode: Yup.string().min(4)
      .matches(/^(?=.*[0-9])/, 'Deve conter números')
      .required()
  })

  const initValues: FormValues = {
    accessCode: ''
  }

  const alertFormInvalid = useCallback(() => {
    Alert.alert('Não esqueça do seu código de acesso!', 'Esse código precisa conter 4 dígitos. Mas, não escolha uma sequencia com números repetidos!')
  }, [])

  const alertFormInfo = useCallback(() => {
    Alert.alert(config.accessCode.title, config.accessCode.body)
  }, [])

  const navigateBack = useCallback(() => {
    navigation.goBack()
  }, [])

  const navigationToAccessCode = useCallback((values: FormValues): void => {
    const companyParamsRequest: ParamsExportRequest = {
      ...values,
      ...companyParams
    }

    console.log(companyParamsRequest)

    createCompany.execute({
      cnpj: companyParamsRequest.cnpj,
      name: companyParamsRequest.name,
      email: companyParamsRequest.email,
      accessCode: companyParamsRequest.accessCode,
      password: companyParamsRequest.password
    }).then((e) => {
      Alert.alert('Seja bem vindo!')
    })
      .catch((e: Error) => {
        Alert.alert('Algo deu errado', e.message)
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
              marginTop: 30
            }}>
              <TextRoboto
                align='center'
                weight='Medium'
                size={24}
                color={theme.textDark}
              >
                Sua empresa será identificada pelo CNPJ
              </TextRoboto>
            </View>
            <View style={{
              marginTop: 30
            }}>
              <TextRoboto
                align='center'
                weight='Bold'
                size={20}
                color={theme.colorsBase.darkBlue}
              >
                {`${toMaskCnpj(companyParams.cnpj)}`}
              </TextRoboto>
            </View>
            <View style={{
              marginTop: 40
            }}>

              <TouchableOpacity
                onPress={alertFormInfo}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <TextRoboto>Crie a chave de acesso</TextRoboto>
                <MaterialIcons name="help" size={20} color={theme.opaque} />

              </TouchableOpacity>

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
                {...{ isValid }}
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

export default SignUpCompanyPassword
