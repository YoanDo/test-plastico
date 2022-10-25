import React, { Fragment } from 'react'
import withLayout from '../src/hoc/layout'

import Footer from '../src/components/Footer'
import SolutionsPage2 from '../src/scenes/Solutions_new'

const Solution = () => (
  <Fragment>
    <SolutionsPage2 />
    <Footer />
  </Fragment>
)
export default withLayout(Solution)
