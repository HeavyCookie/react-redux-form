// @flow
import * as React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import reducer from './test-form/reducer'
import { TestForm } from './test-form/view'

export const store = createStore(reducer)

export const TestApp = (props: { children: React.Node }) => (
  <Provider store={store}>
    <TestForm>
      {props.children}
    </TestForm>
  </Provider>
)
