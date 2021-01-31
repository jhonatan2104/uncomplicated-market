const colorsBase = {
  darkBlue: '#050517',
  orange: '#FE5F55',
  white: '#fff',
  darkWhite: '#F4F5F7',
  gray: '#ccc',
  blackLight: '#333'
}

export default {
  colorsBase,
  company: {
    primary: colorsBase.darkBlue,
    second: colorsBase.orange,
    textLight: colorsBase.white,
    textDark: colorsBase.blackLight,
    base: colorsBase.darkWhite,
    opaque: colorsBase.gray
  },
  cooperator: {
    primary: colorsBase.orange,
    second: colorsBase.darkBlue,
    textLight: colorsBase.white,
    textDark: colorsBase.blackLight,
    base: colorsBase.darkWhite,
    opaque: colorsBase.gray
  }
}

export type Theme = {
  colorsBase: {
    darkBlue: string
    orange: string
    white: string
    darkWhite: string
    gray: string
    blackLight: string
  }
  primary: string
  second: string
  textLight: string
  base: string
  opaque: string
  textDark: string
}
