import React from 'react'
import { Splash } from '@/presentation/pages'
import { makeFireGetStateAuth } from '../usecases/auth/fire-get-state-auth-factory'
import { makeGetCompany } from '../usecases/company/get-company-factory'

export const makeSplash: React.FC = () => {
  const getStateAuth = makeFireGetStateAuth()
  const getCompany = makeGetCompany()
  return <Splash {...{ getStateAuth, getCompany }}/>
}
