import { List } from '../Components/Todo/List'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { RootState } from '../Redux/store'

const mapStateToProps = (state: RootState) => {
  return { list: state.List.list }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
