import styled, { css } from 'styled-components/native'
import { StyleSheet } from 'react-native'

const input = css`
    height: 53px;
    width: 307px;
    border-width: ${() => `${StyleSheet.hairlineWidth}px`};
    border-color: #BAB7C3;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    color: #514e5a;
    font-family: Roboto-Regular;
    font-size: 18px;
`
export const InputStyled = styled.TextInput`
    ${input}
`
