// @flow
import React from 'react'
import { mount } from 'enzyme'

import { store, TestApp } from '../__support/test-form'
import { Input } from '../../src/components/input'

describe('text', () => {
  test('value is displayed from model', () => {
    const form = mount(
      <TestApp>
        <Input mapping="value" />
      </TestApp>
    )

    expect(store.getState().data.value).toEqual('Default value')
  })

  test('value is updated', () => {
    const form = mount(
      <TestApp>
        <Input mapping="value" />
      </TestApp>
    )

    form.find('input').simulate('change', { target: { value: 'Updated value' } })

    expect(store.getState().data.value).toEqual('Updated value')
  })
})
