import { getDay } from '../date-helper'
import moment from 'moment'
describe('function helper: getDay', () => {
  const makeSut = (): (date?: string) => string => {
    return getDay
  }
  it('return data format current', () => {
    const sut = makeSut()

    const dateExpect = moment().format('YYYY/MM/DD')

    expect(sut()).toBe(dateExpect)
  })

  it('return date format', () => {
    const sut = makeSut()

    const dateExpect = '2000/12/02'
    const date = moment(new Date(dateExpect)).format()

    expect(sut(date)).toBe(dateExpect)
  })
})
