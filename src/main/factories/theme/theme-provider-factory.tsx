import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import theme from '@/presentation/theme'

type Props = {
  children: React.ReactNode
}

const AppThemeProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider {...{ theme }}>
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
