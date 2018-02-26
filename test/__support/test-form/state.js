// @flow
import type { Form } from "../../../src/redux/model"
import { emptyForm } from "../../../src/redux/model"

export type TestModel = { value: string }

export type State = Form<TestModel>

export const emptyState = emptyForm({ value: 'Default value'})
