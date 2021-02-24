import { BackgroundCircle, ButtonIcon, TextRoboto } from '@/presentation/components'
import { useTheme } from '@/presentation/hooks/use-theme'
import { getAccount, getTypeAccount } from '@/presentation/store/system/selectors'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { TYPE_COMPANY } from '@/data/constants/account'
import { Container } from '@/presentation/components/styled'
import { getContentAccount } from '@/presentation/store/selectors'

const Home: React.FC = () => {
  const account = useSelector(getAccount)
  const typeAccount = useSelector(getTypeAccount)
  const contentAccount = useSelector((state) => getContentAccount(state, typeAccount))

  const theme = useTheme()

  const titleScreen = useMemo(() => {
    if (account) {
      if (typeAccount === TYPE_COMPANY) {
        return `Seja bem-vindo ${account.name}`
      }
      return `Olá ${account.name}, você é um colaborador ${contentAccount.company?.name ?? '!'}`
    }
  }, [account, typeAccount, contentAccount])

  const iconScreen = useMemo(() => {
    if (account) {
      if (typeAccount === TYPE_COMPANY) {
        return <MaterialIcons name="work" size={52} color={theme.textLight} />
      }
      return <MaterialIcons name="assignment-ind" size={52} color={theme.textLight} />
    }
  }, [account, typeAccount])

  return (
    <BackgroundCircle bg={theme.primary} bgBack={theme.base}>
      <Container>
        <View style={{
          alignItems: 'center',
          flex: 1,
          marginTop: 80
        }}>
          <View style={{
            marginBottom: 40
          }}>
            <TextRoboto color={theme.textLight} align='center' weight='Bold' size={24}>{titleScreen}</TextRoboto>
          </View>
          <ButtonIcon
            bg={theme.second}
            title='PEDIDO'
          >
            <MaterialIcons name='add-shopping-cart' color={theme.textLight} size={24} />
          </ButtonIcon>
          <ButtonIcon
            bg={theme.second}
            title='PRODUTOS'
          >
            <MaterialIcons name='assignment' color={theme.textLight} size={24} />
          </ButtonIcon>
          <ButtonIcon
            bg={theme.second}
            title='RELATÓRIO'
            disabled={typeAccount !== TYPE_COMPANY}
          >
            <MaterialIcons name='assessment' size={24} color={theme.textLight} />
          </ButtonIcon>

          <View style={{
            position: 'absolute',
            bottom: 0
          }}>
            {iconScreen}
          </View>
        </View>
      </Container>
    </BackgroundCircle>

  )
}

export default Home
