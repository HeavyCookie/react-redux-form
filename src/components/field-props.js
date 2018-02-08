// @flow

export type FieldProps = {
  type?: 'text' | 'password' | 'email' | 'file' | 'number' | 'date' | 'radio',
  label?: string,
  placeholder?: string,
  disabled?: boolean,
  value?: any,
  mapping: Array<string | number> | string,
  appendId?: string,
  update?: Function,
  overrideAction?: Function,
  className?: string,
}
