// @flow
import * as React from 'react'
import { getFieldErrors, getFieldValue } from '../redux/model'
import type { FormContext } from './form'
import { Form, Context } from './form'
import type { FieldProps } from './field-props'
import { Field } from './field'

type Props = FieldProps & {
  hideOnlyInput?: boolean
}

export const InputComponent = (props: Props ) => {
  const mapping = (typeof props.mapping === 'string' ? ([props.mapping]) : props.mapping)
  const dashedName = mapping.join('-')
  const value = getFieldValue(props.model, mapping)
  const errors = getFieldErrors(props.model, mapping)

  const update = (event: SyntheticInputEvent<HTMLInputElement>) => {
    if (props.action) {
      if(props.type === 'file') {
        const file = event.target.files[0]
        props.dispatch(props.action(mapping, file))
      } else {
        props.dispatch(props.action(mapping, event.target.value))
      }
    }
  }

  return (
    <Field errors={ errors } className={ props.className }>
      { props.label && <label htmlFor={ dashedName }>{ props.label }</label> }
      <input
        type={ props.type || 'text' }
        id={ dashedName + (props.appendId || '') }
        className={props.hideOnlyInput ? 'hidden' : null}
        placeholder={ props.placeholder }
        name={ dashedName }
        checked={ ['radio', 'checkbox'].includes(props.type) ? value === props.value : undefined }
        value={ props.type !== 'file' ? props.value || value || '' : undefined }
        onChange={ props.overrideAction || update }
        disabled={ props.disabled }
      />
    </Field>
  )
}

export const Input = (props: Props) =>(
  <Context.Consumer>
    {context => <InputComponent {...props} {...context} />}
  </Context.Consumer>
)
