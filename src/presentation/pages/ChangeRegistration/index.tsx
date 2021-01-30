import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import theme from '@/presentation/theme'
import { Container, Title, CardButton, Label, ContainerIcon } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getTypeAccount } from '@/presentation/store/system/selectors'
import { actionSetTypeAccount } from '@/presentation/store/system/actions'
import { TYPE_COMPANY, TYPE_COOPERATOR } from '@/data/constants/account'
import { useNavigation } from '@react-navigation/native'

const ChangeRegistration: React.FC = () => {
  const typeAccount = useSelector(getTypeAccount)
  console.log('type', typeAccount)

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const navigateRegisterCompany = useCallback(() => {
    dispatch(actionSetTypeAccount(TYPE_COMPANY))
    navigation.navigate('SignUpCompany')
  }, [])

  const navigateRegisterCooperator = useCallback(() => {
    dispatch(actionSetTypeAccount(TYPE_COOPERATOR))
    navigation.navigate('SignUpCooperator')
  }, [])
  return (
    <ScrollView
      style={{
        flex: 1
      }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 16
      }}
    >
      <Container>
        <Title>Como deseja se cadastrar?</Title>

        <CardButton bg={theme.company.primary} onPress={navigateRegisterCompany}>
          <Label>Empresa</Label>
          <ContainerIcon>
            <MaterialIcons name="work" size={52} color={theme.company.textLight} />
          </ContainerIcon>
        </CardButton>

        <CardButton bg={theme.cooperator.primary} onPress={navigateRegisterCooperator}>
          <Label>Colaborador</Label>
          <ContainerIcon>
            <MaterialIcons name="assignment-ind" size={52} color={theme.cooperator.textLight} />
          </ContainerIcon>
        </CardButton>
      </Container>
    </ScrollView>

  )
}

export default ChangeRegistration
