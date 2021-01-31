import moment from 'moment'

export const getNow = (): string => {
  return moment().format()
}

export const getDay = (date?: string): string => {
  return moment(date).format('YYYY/MM/DD')
}
