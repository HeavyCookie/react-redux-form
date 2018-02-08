// @flow
import * as React from 'react'

export const Field =
  (props: { errors: Array<string>, children: React.Node, className?: string }) => {
    const hasErrors = props.errors.length > 0

    let classes = ['field']
    if (hasErrors) classes = [...classes, 'error']
    if (props.className) classes = [...classes, props.className]

    return (
      <div className={ classes.join(' ') }>
        { props.children }
        {props.errors}
      </div>
    )
  }

export default Field
