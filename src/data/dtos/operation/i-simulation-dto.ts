interface ISimulationDTO {
  id?: string
  simulationDate?: Date
  name?: string
  email?: string
  birthDate?: string
  age?: string
  propertyPrice?: number
  financedAmount?: number
  financedAmountPercentage?: number
  bankId?: string
  totalEffectiveCostRateYearPrice?: number
  totalEffectiveCostRateMonthPrice?: number
  totalEffectiveCostRateYearSac?: number
  totalEffectiveCostRateMonthSac?: number
  nominalInterestRateYear?: number
  nominalInterestRateMonth?: number
  effectiveInterestRateYear?: number
  effectiveInterestRateMonth?: number
  maximumAgeInMonths?: number
  dfiPropertyPhysicalDamageInsurance?: number
  ceshEffectiveCostOfInsurance?: number
  mipDeathAndPermanentDisabilityInsurance?: number
  tacContractAdministrationFee?: number
  propertyValuationFee?: number
  iofTaxOnFinancialOperations?: number
  itbi?: number
  minimumIncome?: number
  firstInstalment?: number
  instalments?: string
  includeItbi?: boolean
  sendDate?: Date
  clickDate?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type { ISimulationDTO }
