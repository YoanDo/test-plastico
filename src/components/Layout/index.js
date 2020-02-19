import { Fragment } from 'react'

import Menu from '../Menu'
import GlobalStyle, { Wrapper } from './styles'

const withLayout = Page => () => (
  <Fragment>
    <Wrapper menu>
      <Menu />
    </Wrapper>
    <Page />
    <GlobalStyle whiteColor />
  </Fragment>
)

export default withLayout
