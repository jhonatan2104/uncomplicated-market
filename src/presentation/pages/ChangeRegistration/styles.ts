import styled from 'styled-components/native'
import theme from '@/presentation/theme'

export const Container = styled.View`
    flex: 1;
    background-color: ${() => theme.colorsBase.darkWhite};
    align-items: center;
    padding-top: 53px;
`
export const Title = styled.Text`
    text-align: center;
    font-family: Roboto-Bold;
    font-size: 32px;
    color: ${() => theme.colorsBase.darkBlue};
    margin-bottom: 47px;
`
type propsCardButton = {
  bg: string
}

export const CardButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
    width: 90%;
    height: 264px;
    background-color: ${({ bg }: propsCardButton) => bg};
    border-radius: 20px;
    margin-bottom: 15px;
`
export const Label = styled.Text`
    font-family: Roboto-Medium;
    font-size: 26px;
    color: ${() => theme.colorsBase.white};
    position: absolute;
    left: 35px;
    top: 35px;
`
export const ContainerIcon = styled.View`
    position: absolute;
    right: 35px;
    bottom: 15px;
`
