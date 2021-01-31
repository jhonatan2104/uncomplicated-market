import { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { Theme } from '@/presentation/theme'

export const useTheme = (): Theme => {
  const themeContext = useContext(ThemeContext)
  return themeContext
}
