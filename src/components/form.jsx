// @flow
import * as React from 'react'
import { connect } from 'react-redux'
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

export const Context = React.createContext({})

const FormComponent = (props: FormProps) => {
  const onSubmit = (event) => {
    event.preventDefault()
    if (props.onSubmit) props.onSubmit()
  }

  const { className, children, ...context } = props

  return (
    <Context.Provider value={context}>
      <form
        className={`ui form ${className || ''}`}
        onSubmit={ onSubmit }>
        { children }
      </form>
    </Context.Provider>
  )
}

export const Form = connect()(FormComponent)
