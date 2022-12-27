import type { InferType } from 'yup'
import { object, string } from 'yup'
import { emailSchema } from './common.validation.type'

export const ContactFormSchema = object({
  name: string().required().min(3).label('Name'),
  email: emailSchema,
  phone: string().required().validatePhone().label('Phone Number'),
  message: string().required().min(25).max(500).label('Message'),
})

export type ContactPayload = InferType<typeof ContactFormSchema>
