// @flow
import type { UpdateForm } from '../../../src/redux/actions'
import { updateForm } from '../../../src/redux/actions'


export const UPDATE = 'UPDATE_FORM'
export type Update = UpdateForm<'UPDATE_FORM'>
export const update = updateForm(UPDATE)

export type Actions = Update
