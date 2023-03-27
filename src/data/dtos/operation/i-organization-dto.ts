interface IOrganizationDTO {
  id?: string
  cnpj?: string
  legalName?: string
  tradeName?: string
  categoryId?: string
  address?: string
  number?: string
  complement?: string
  zipCode?: string
  stateId?: string
  cityId?: string
  email?: string
  phoneNumber?: string
  disabled?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type { IOrganizationDTO }
