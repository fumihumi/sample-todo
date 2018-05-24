import { Detail } from '../Components/Todo/Detail'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { RootState } from '../Redux/store'

const mapStateToProps = (state: RootState, ownProps: { id: number} ) => {
  return { id: ownProps.id, detail: state.Detail[ownProps.id] }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
