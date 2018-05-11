// @flow
import { fromJS } from 'immutable'

export type Errors = $Exact<{[field: string]: Array<string>}> | {}

export type Form<T> = {
  data: T,
  errors: Errors,
}

export const emptyForm = <T>(model: T): Form<T> => ({
  data: model,
  errors: {},
})

/**
 * Return value of a field form FormModel
 */
export const getFieldValue = (form: ?Form<*>, field: Array<string | number>) => {
  let value
  if (form) value = fromJS(form).getIn(['data', ...field])
  if (typeof value === 'undefined') return ''
  return value
}

/**
 * Return errors of a field
 */
export const getFieldErrors =
  (form: ?Form<*>, field: Array<string | number>): any => {
    if (form) {
      return form.errors[field.join('.')]
    }
    return null
  }
