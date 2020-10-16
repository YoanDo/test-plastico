import React, { Fragment } from 'react'
import withLayout from '../src/hoc/layout'
import DataChart from '../src/components/DataChart'

const Data = () => (
  <Fragment>
    <DataChart />
  </Fragment>
)
export default withLayout(Data)
