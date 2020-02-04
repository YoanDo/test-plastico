import { Fragment } from 'react'
import Header from '../Header'
import GlobalStyle from './styles'

const withLayout = Page => () => (
  <Fragment>
    <Header />
    <Page />
    <GlobalStyle whiteColor />
  </Fragment>
)

export default withLayout
