// @flow
import type { FormContext } from './form'

export type FieldProps = FormContext & {
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
  const { model, action, dispatch, label, placeholder, disabled, value,
    mapping, appendId, overrideAction, className, ...override } = props
  return override
}
