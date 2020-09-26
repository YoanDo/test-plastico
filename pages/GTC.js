import React, { Fragment } from 'react'

import GTC from '../src/components/Legal/GTC'
import Footer from '../src/components/Footer'
import withLayout from '../src/components/Layout'

const GTCPage = () => (
  <Fragment>
    <GTC/>
    <Footer/>
  </Fragment>
)
export default withLayout(GTCPage)
