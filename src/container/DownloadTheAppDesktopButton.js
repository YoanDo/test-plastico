import { connect } from 'react-redux'

import { downloadAppModal } from '../redux/actions'



const TestButton = ({onClick}) => {
    return(<div onClick={onClick }><h1>HERE</h1></div>)

}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (data) => {
      dispatch(downloadAppModal(data))
    },
  }
}

export default connect(null, mapDispatchToProps)(TestButton)
