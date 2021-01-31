import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const Container = styled.View`
    width: ${windowWidth}px;
    height: 100%;
    padding-left: 63px;
    padding-right: 63px;
    align-items: center;
    justify-content: center;
`
