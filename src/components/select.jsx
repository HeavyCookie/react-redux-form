// @flow
import React from 'react'
import { getContext } from 'recompose'
import type { FieldProps } from './field-props'
import { getFieldErrors, getFieldValue } from '../redux/model'
import { Field } from './field'
import { Form, contextTypes } from './form'

export const SelectComponent = (props: FieldProps & { values: {[key: string | number]: string} }) => {
  const mapping = (typeof props.mapping === 'string' ? ([props.mapping]) : props.mapping)
  const dashedName = mapping.join('-')
  const value = getFieldValue(props.model, mapping)
  const errors = getFieldErrors(props.model, mapping)

  const update = (event: SyntheticInputEvent<HTMLInputElement>) => {
    if(props.action) props.dispatch(props.action(mapping, event.target.value))
  }

  return (
    <Field errors={ errors } className={ props.className }>
      { props.label && <label htmlFor={ dashedName }>{ props.label }</label> }
      <select id={ dashedName } onChange={ update } value={ value || undefined }
        defaultValue={ props.placeholder }>
        { props.placeholder &&
          <option value={ props.placeholder } disabled>{ props.placeholder }</option>
        }
        { Object.keys(props.values).map(
          k => <option key={ k } value={ k }>{ props.values[k] }</option>
        ) }
      </select>
    </Field>
  )
}

export const Select = getContext(contextTypes)(SelectComponent)
