import React, { useState, useMemo, useEffect } from 'react'
import { ThemeProvider } from 'styled-components/native'

import presentationTheme from '@/presentation/theme'

import { useSelector } from 'react-redux'
import { getTypeAccount } from '@/presentation/store/system/selectors'

import { TYPE_COMPANY } from '@/data/constants/account'

type Props = {
  children: React.ReactNode
}

const AppThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const themeCooperator = useMemo(() => ({
    colorsBase: presentationTheme.colorsBase,
    ...presentationTheme.cooperator
  }), [])

  const themeCompany = useMemo(() => ({
    colorsBase: presentationTheme.colorsBase,
    ...presentationTheme.company
  }), [])

  const [theme, setTheme] = useState(themeCooperator)

  const typeAccount = useSelector(getTypeAccount)

  useEffect(() => {
    if (typeAccount === TYPE_COMPANY) {
      setTheme(themeCompany)
    } else {
      setTheme(themeCooperator)
    }
  }, [typeAccount])

  return (
    <ThemeProvider {...{ theme }}>
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
