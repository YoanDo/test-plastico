import React from 'react'
import CountUp from 'react-countup'

import { number, string } from 'prop-types'
import { DataWrapper, Count, Key } from './styles.js'

const Data = ({ label, value, timing }) => (
  <DataWrapper>
    <Count>
      <CountUp duration={timing} end={value} start={0} />
    </Count>
    <Key>{label}</Key>
  </DataWrapper>
)

Data.propTypes = {
  label: string,
  value: number,
  timing: number,
}

Data.defaultProps = {
  label: null,
  value: 0,
  timing: 0,
}

export default Data
