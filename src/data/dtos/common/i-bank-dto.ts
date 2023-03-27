interface IBankDTO {
  id?: string
  cnpj?: string
  legalName?: string
  tradeName?: string
  totalEffectiveCostRateYear?: number
  totalEffectiveCostRateMonth?: number
  nominalInterestRateYear?: number
  nominalInterestRateMonth?: number
  effectiveInterestRateYear?: number
  effectiveInterestRateMonth?: number
  maximumAgeInMonths?: number
  dfiPropertyPhysicalDamageInsurance?: number
  ceshEffectiveCostOfInsurance?: number
  mpiDeathAndPermanentDisabilityInsurance?: number
  tacContractAdministrationFee?: number
  propertyValuationFee?: number
  iofTaxOnFinancialOperations?: number
  itbi?: number
  minimumIncome?: number
  disabled?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type { IBankDTO }
