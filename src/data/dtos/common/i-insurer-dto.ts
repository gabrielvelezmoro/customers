interface IInsurerDTO {
  id?: string
  bankId?: string
  cnpj?: string
  legalName?: string
  tradeName?: string
  integrationCode?: string
  disabled?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type { IInsurerDTO }
