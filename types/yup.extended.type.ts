import * as yupExtended from 'yup'
import { AnyObject, Maybe } from 'yup/lib/types'

export type ValidatePhone = {
  countryCode?: string
  validationType?: 'mobile' | 'phone'
}

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yupExtended.BaseSchema<TType, TContext, TOut> {
    validatePhone(countryCode?: string): StringSchema<TType, TContext>
  }
}

export default yupExtended
