import moment from 'moment'

export const getNow = (): string => {
  return moment().format()
}
