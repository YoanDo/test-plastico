import React, { Fragment } from 'react'

import CGU from '../src/components/Legal/CGU'
import Footer from '../src/components/Footer'
import withLayout from '../src/hoc/layout'

const CGUPage = () => (
  <Fragment>
    <CGU />
    <Footer />
  </Fragment>
)
export default withLayout(CGUPage)
