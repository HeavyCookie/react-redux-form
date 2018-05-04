// @flow
import React from 'react'
import { mount } from 'enzyme'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import { Form } from '../src/components/form'
import { Input } from '../src/components/input'

const AnotherComponent = (props) => (<span>{props.children}</span>)

describe('through multiple levels of components', () => {

  test('children can read context', () => {
    const form = mount(
      <Provider store={createStore(() => 0)}>
        <Form model={{ data: { myField: 'test' }, errors: {}}} action={() => 0}>
          <AnotherComponent>
            <Input mapping="myField" />
          </AnotherComponent>
        </Form>
      </Provider>
    )

    expect(form.find('input').prop('value')).toEqual('test')
  })

  test('children updates their values', () => {
    const reducer = (state, action) => {
      if(action.type == 'UPDATE') {
        return {data: {myField: 'testUpdated'}, errors: {}}
      } else {
        return {data: {myField: 'test'}, errors: {}}
      }
    }
    const store = createStore(reducer)
    const mapStateToProps = s => s
    const ConnectedContainer = connect(mapStateToProps)((props) => (
      <Form model={props} action={() => ({type: 'UPDATE'})}>
        <AnotherComponent>
          <Input mapping="myField" />
        </AnotherComponent>
      </Form>
    ))
    const form = mount(
      <Provider store={store}>
        <ConnectedContainer />
      </Provider>
    )

    store.dispatch({type: 'UPDATE'})

    form.update()
    expect(form.find('input').prop('value')).toEqual('testUpdated')
  })
})
