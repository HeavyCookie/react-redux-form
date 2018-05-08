# HeavyCookie React Redux Form

Toolkit for building forms with React & Redux

## Install

```bash
yarn add @heavycookie/react-redux-form
```

## Usage

### JSX

#### `<Form />`
This is the base of a react redux form.

It has 3 main property :
* `model`: A reference to the redux object
* `action`: A function executed at each sub-element update
* `onSubmit`: A function executed on form submit

#### Other components

They are all other `.jsx` located in `src/components`.

They build a HTML component with div generally enclosing a label, a form control element (like `<input />`, `<checkbox />`, etc.), and a potential list of errors.

They have two main props :
* `mapping`: which can be a string or an array (see immutable.js path) representing the path of the value from the form's attribute `model`.
* `label`: if present, it displays the label of the field

### Actions helpers

At @HeavyCookie, we define redux actions for each reducer in a separate file named `actions.js`, next to our `reducer.js`.

This is an `actions.js` example:

```js
// @flow
import * as ActionHelper from '@heavycookie/react-redux-form/redux/actions'

export const UPDATE = 'UPDATE'
export type Update = ActionHelper.UpdateForm<'UPDATE'>
export const update = ActionHelper.updateForm(UPDATE)

export type Actions = Update
```

`update` function generate an object with the `UPDATE` type and the field mapping defined in controller component with the current value of this component. It's this action which is triggered by the `<Form />` update function.

It's a normalized object type, because it's used with our reducer helper.

### Reducers helpers

This is an example of our reducer helper:
```js
import * as FormHelper from '@heavycookie/react-redux-form/redux/reducer'
import * as State from './state'
import * as Actions from './actions'

export default (state: State.State = State.default(), action: Actions.Actions): State.State => {
  console.log(state)
  switch(action.type) {
    case Actions.UPDATE:
      const updatedForm = FormHelper.updateField(state.form, action.field, action.value)
      return { ...state, form: updatedForm }
  }
  return state
}
```

`updateField` update the original form field with the provided value.
