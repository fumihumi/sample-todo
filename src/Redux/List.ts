// import { Action, Dispatch } from 'redux'
// import { actionCreatorFactory } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface ListState {
  list: Todo[]
}

interface Todo {
    id: number
    title: string
    assigned: string
}

// const actionCreator = actionCreatorFactory()
// const create = actionCreator.async<{}, any, {}>('CREATE_FLOOR')

const initialState: ListState = {
  list: [
    {
      id: 1,
      title: "テストTitle",
      assigned: "@__mnc90"
    },
    { id: 2, title: "mnc Title", assigned: "@__mnc90" },
    { id: 3, title: "Sample Title", assigned: "@sample" }
  ]
}

export default reducerWithInitialState(initialState)
