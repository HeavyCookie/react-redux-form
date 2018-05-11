// @flow
import * as React from 'react'
import type { FormContext } from './form'
import { Context } from './form'

export const FieldErrors = ({ errors }: { errors: any }) =>
  (errors && errors.length > 0 ? (
    <div className="errors">
      <Context.Consumer>
        {(context) => {
          const listErrors = context.errorHandler
            ? errors.map(context.errorHandler)
            : errors

          return listErrors.join(', ')
          }
        }
      </Context.Consumer>
    </div>
  ) : null)

export const Field =
  (props: { errors: Array<string>, children: React.Node, className?: string }) => {
    const hasErrors = props.errors.length > 0

    let classes = ['field']
    if (hasErrors) classes = [...classes, 'error']
    if (props.className) classes = [...classes, props.className]

    return (
      <div className={ classes.join(' ') }>
        { props.children }
        <FieldErrors errors={props.errors} />
      </div>
    )
  }

export default Field
