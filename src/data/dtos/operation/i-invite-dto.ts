interface IInviteDTO {
  id?: string
  organizationId?: string
  personId?: string
  roleId?: string
  email?: string
  inviteDate?: Date
  inviteAcceptanceDate?: Date
  createdAt?: Date
  updatedAt?: Date
}

export type { IInviteDTO }
