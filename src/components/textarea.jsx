// @flow
import React from 'react'
import { getContext } from 'recompose'
import type { FieldProps } from './field-props'
import { Field } from './field'
import { Form, contextTypes } from './form'
import { getFieldValue, getFieldErrors } from '../redux/model'

export const TextareaComponent = (props: FieldProps & { rows?: string }) => {
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
      <textarea
        placeholder={ props.placeholder }
        rows={ props.rows }
        id={ dashedName }
        value={ value }
        onChange={ props.overrideAction || update } />
    </Field>
  )
}


export const TextArea = getContext(contextTypes)(TextareaComponent)
