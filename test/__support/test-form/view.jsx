// @flow
import * as React from 'react'
import { connect } from 'react-redux'

import { Form, Input } from "../../../src/index";
import type { State } from './state'
import { update } from './actions'

export const TestFormComponent = (props: { form: State, children: React.Node }) => (
  <Form model={props.form} action={update}>
    {props.children}
  </Form>
)

export const mapStateToProps = (state: State) => ({form: state})
export const TestForm = connect(mapStateToProps)(TestFormComponent)
