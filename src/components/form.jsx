// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, withContext } from 'recompose'
import type { Form as FormModel } from '../redux/model'
import PropTypes from 'prop-types'

export type FormContext = {
  model?: FormModel<*>,
  action?: (mapping: Array<string | number>, value: string | File | boolean) => Object,
  dispatch: (action: { type: string }) => any,
}

type FormProps = FormContext & {
  children?: React.Node,
  className?: string,
  onSubmit?: Function,
}

const FormComponent = (props: FormProps) => {
  const onSubmit = (event) => {
    event.preventDefault()
    if (props.onSubmit) props.onSubmit()
  }
  return (
    <form
      className={`ui form ${props.className || ''}`}
      onSubmit={ onSubmit }>
      { props.children }
    </form>
  )
}

export const contextTypes = {
  model: PropTypes.object,
  action: PropTypes.func,
  dispatch: PropTypes.func,
  onSubmit: PropTypes.func,
}

export const Form = compose(
  connect(),
  withContext(contextTypes, (props: FormProps) => {
    const { className, children, ...context } = props
    return { ...context }
  })
)(FormComponent)
