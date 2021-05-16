import React, { Fragment } from 'react'
import withLayout from '../src/hoc/layout'

import Footer from '../src/components/Footer'
import SolutionsPage from '../src/scenes/Solutions'

const Solution = () => (
  <Fragment>
    <SolutionsPage />
    <Footer />
  </Fragment>
)
export default withLayout(Solution)
