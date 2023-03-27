interface IPersonDTO {
  id?: string
  organizationId?: string
  roleId?: string
  name?: string
  email?: string
  mobile?: string
  operatorId?: string
  whatsapp?: string
  stateId?: string
  cityId?: string
  zipCode?: string
  address?: string
  number?: string
  complement?: string
  genreId?: string
  validated?: boolean
  validationDate?: Date
  disabled?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type { IPersonDTO }
