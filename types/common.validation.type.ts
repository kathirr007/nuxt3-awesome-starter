import { parsePhoneNumber } from 'awesome-phonenumber'
import { ref, string, addMethod, StringSchema } from 'yup'

addMethod<StringSchema>(
  string,
  'validatePhone',
  function validatePhone(countryCode = 'IN') {
    return this.test(
      'is-phone-valid',
      (message) =>
        `${
          message.path
        } must be a valid <strong>${'Phone or Mobile'}</strong> number`,
      (value, { createError, schema }) => {
        const isRequired = schema.spec.presence === 'required'
        if (
          !isRequired &&
          (value === undefined || value === '' || value === null)
        ) {
          return true
        }
        return value !== undefined
          ? parsePhoneNumber(value, { regionCode: countryCode }).valid
          : createError({
              message(params: Record<string, unknown>) {
                return `${params.path} is invalid`
              },
            })
      }
    )
  }
)

export const PasswordSchema = string()
  .min(8)
  .matches(/[\W_]/, ({ label }) => `${label} at least one special characters`)
  .matches(/[0-9]/, ({ label }) => `${label} at least one number`)
  .matches(/[A-Z]/, ({ label }) => `${label} at least one uppercase`)
  .matches(/[a-z]/, ({ label }) => `${label} at least one lowercase`)
  .required()
  .label('Password')

export const confirmPasswordSchema = (reference: string) => {
  return string()
    .oneOf(
      [ref(reference), null],
      `Confirm Password doesn't match with Password`
    )
    .required()
    .label('Confirm Password')
}

export const emailSchema = string().email().required().label('Email')
