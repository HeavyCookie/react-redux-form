// @flow
import React from 'react'
import { getContext } from 'recompose'
import type { FieldProps } from './field-props'
import { getFieldErrors, getFieldValue } from '../redux/model'
import { Field } from './field'
import { Form, contextTypes } from './form'

export const CheckboxComponent = (props: FieldProps) => {
  const mapping = (typeof props.mapping === 'string' ? ([props.mapping]) : props.mapping)
  const dashedName = mapping.join('-')
  const value = getFieldValue(props.model, mapping)
  const errors = getFieldErrors(props.model, mapping)

  const update = (event: SyntheticInputEvent<HTMLInputElement>) => {
    if (props.action) props.dispatch(props.action(mapping, event.target.checked))
  }

  return (
    <Field errors={ errors } className={ props.className }>
      <div className="ui checkbox">
        <input
          type="checkbox"
          id={ dashedName }
          checked={ !!value }
          onChange={ update }
        />
        { props.label && <label htmlFor={ dashedName }>{ props.label }</label> }
      </div>
    </Field>
  )
}

export const Checkbox = getContext(contextTypes)(CheckboxComponent)
