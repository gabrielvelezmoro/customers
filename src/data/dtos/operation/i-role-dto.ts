interface IRoleDTO {
  id?: string
  organizationId?: string
  name?: string
  validationRequired?: boolean
  disabled?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type { IRoleDTO }
