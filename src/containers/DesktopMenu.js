import { connect } from 'react-redux'

import { downloadAppModal } from '../redux/actions'
import DesktopMenu from '../components/Menu/DesktopMenu'


function mapDispatchToProps(dispatch) {
  return {
    openDownloadAppModal: (data) => {
      dispatch(downloadAppModal(data))
    },
  }
}

export default connect(null, mapDispatchToProps)(DesktopMenu)
