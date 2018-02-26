// @flow
import * as State from './state'
import * as Actions from './actions'
import { updateField } from '../../../src/redux/reducer'

export default (state: State.State = State.emptyState, action: Actions.Actions) => {
  switch (action.type) {
    case Actions.UPDATE:
      return updateField(state, action.field, action.value)
    default:
      return state
  }
}
