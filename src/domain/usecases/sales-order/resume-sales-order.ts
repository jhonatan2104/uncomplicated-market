export interface ResumeSalesOrder {
  execute: (params: ResumeSalesOrder.Params) => Promise<ResumeSalesOrder.Result>
}

export namespace ResumeSalesOrder {
  export type Params = {
    cnpj: string
  }

  export type Result = any
}
