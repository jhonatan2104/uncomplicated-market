import React from 'react'
import { SignUpCompanyAccessCode } from '@/presentation/pages'
import { makeCreateCompany } from '../../usecases/company/create-company-factory'

export const makeSingUpCompanyAccessCode: React.FC = () => {
  const createCompany = makeCreateCompany()
  return <SignUpCompanyAccessCode {...{ createCompany }}/>
}
