import React from 'react'
import { ScrollView } from 'react-native'
import theme from '@/presentation/theme'
import { Container, Title, CardButton, Label, ContainerIcon } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

const ChangeRegistration: React.FC = () => {
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

        <CardButton bg={theme.company.primary}>
          <Label>Empresa</Label>
          <ContainerIcon>
            <MaterialIcons name="work" size={52} color={theme.company.textLight} />
          </ContainerIcon>
        </CardButton>

        <CardButton bg={theme.cooperator.primary}>
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
