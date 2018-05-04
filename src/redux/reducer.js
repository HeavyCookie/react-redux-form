// @flow
import { omit, set } from 'lodash'
import type { Errors, Form } from './model'

/**
 * Update method to update field in reducers
 */
export const updateField = (
  form: Form<*>,
  field: Array<string | number> | string,
  value: string | number | File | Blob
): Form<*> => {
  const path = typeof field === 'string'
    ? ['data', field]
    : ['data', ...field]

  if (value != null) return set(form, path.join('.'), value)
  return omit(form, path.join('.'))
}

/**
 * Update method to update errors in reducers
 */
export const updateErrors = <T>(form: T, errors: Errors): T =>
  ({ ...form, errors })
