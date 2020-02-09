import React, { Fragment } from 'react'

import withLayout from '../src/components/Layout'
import Header from '../src/components/Header'
import { Wrapper } from '../src/components/Layout/styles'

const HomePage = () => (
  <Fragment>
    <Header />
    <Wrapper>
      data <br />
      get involve
      <br />
      footer
      <br />
    </Wrapper>
  </Fragment>
)
export default withLayout(HomePage)
