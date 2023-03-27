interface ILeadDTO {
  id?: string
  name?: string
  email?: string
  birthDate?: Date
  propertyPrice?: number
  financedAmount?: number
  contactDate?: Date
  leadOriginId?: string
  campaignId?: string
  alreadyProspect?: boolean
  alreadyCustomer?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type { ILeadDTO }
