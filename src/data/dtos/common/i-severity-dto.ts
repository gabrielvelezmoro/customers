interface ISeverityDTO {
  id?: string
  description?: string
  level?: number
  color?: string
  limitInDays?: number
  disabled?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type { ISeverityDTO }
