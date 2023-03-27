interface INotificationDTO {
  id?: string
  datetimeSending?: Date
  organizationId?: string
  senderId?: string
  subject?: string
  message?: string
  createdAt?: Date
  updatedAt?: Date
}

export type { INotificationDTO }
