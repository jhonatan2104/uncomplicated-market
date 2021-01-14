export interface VerifyAccessCode {
  execute: (params: VerifyAccessCode.Params) => Promise<boolean>
}

export namespace VerifyAccessCode {
  export type Params = {
    cnpj: string
    accessCode: string
  }
}
