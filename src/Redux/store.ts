import { combineReducers, createStore } from 'redux'
import List, { ListState } from './List'
import Detail, { DetailState } from './Detail'

// composit reducer
export const rootReducer = combineReducers({
  List,
  Detail,
})

// store
// TODO: development環境でのみ有効にする
export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export interface RootState {
  List: ListState
  Detail: DetailState
}
