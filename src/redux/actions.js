// @flow
import type { Errors } from './model'

export type UpdateForm<T> = {
  type: T,
  field: Array<string | number>,
  value: string | number | File | Blob
}

export const updateForm = <T>(type: T) =>
  (field: Array<string | number>, value: string | number | File | Blob): UpdateForm<T> =>
    ({ type, field, value })

export type HandleFormErrors<T> = { type: T, errors: { errors: Errors }}
export const handleFormErrors = <T>(type: T) =>
  (errors: { errors: Errors}): HandleFormErrors<T> =>
    ({ type, errors })
