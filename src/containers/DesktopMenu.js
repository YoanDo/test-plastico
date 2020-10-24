import { connect } from 'react-redux'

import { downloadAppModal } from '../redux/actions'
import DesktopMenu from '../components/Menu/DesktopMenu'


function mapDispatchToProps(dispatch) {
  return {
    openDownloadAppModal: () => {
      dispatch(downloadAppModal({title: 'test'}))
    },
  }
}

export default connect(null, mapDispatchToProps)(DesktopMenu)
