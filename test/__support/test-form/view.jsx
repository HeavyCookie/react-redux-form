// @flow
import React from 'react'
import type { MapStateToProps } from 'react-redux'
import { connect } from 'react-redux'

import { Form } from "../../../src/index";
import type { State } from './state'

export const TestFormComponent = (props: { form: State }) =>
<Form model={props.form}>
</Form>

export const mapStateToProps: MapStateToProps<State, *, *> = state => ({form: state})
export const TestForm = connect(mapStateToProps)(TestFormComponent)
