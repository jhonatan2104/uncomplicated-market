import { MaskService } from 'react-native-masked-text'

export const toMaskCnpj = (value: string): string => {
  return MaskService.toMask('cnpj', value)
}

export const toUnmaskedCnpj = (value: string): string => {
  return MaskService.toRawValue('cnpj', value)
}
