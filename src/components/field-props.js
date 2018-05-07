// @flow
import type { FormContext } from './form'

export type FieldProps = FormContext & {
  type?: 'text' | 'password' | 'email' | 'file' | 'number' | 'date' | 'radio',
  label?: string,
  placeholder?: string,
  disabled?: boolean,
  value?: any,
  mapping: Array<string | number> | string,
  appendId?: string,
  overrideAction?: Function,
  className?: string,
}

export const extractPropsOverride = (props: FieldProps): {} => {
  const { model, action, dispatch, type, label, placeholder, disabled, value,
    mapping, appendId, overrideAction, className, ...override } = props
  return override
}
