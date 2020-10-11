import React from 'react'
import { Wrapper } from '../../hoc/layout/styles'

const DataChart = () => (
  <Wrapper>
    <iframe
      title="test chart"
      width="800"
      height="600"
      src="https://app.powerbi.com/view?r=eyJrIjoiMTkzNjIwNGItNzFhNy00MGM0LWE1ZTMtOWU0NWJjNWE1OGNmIiwidCI6IjFmYjU4MWYzLTQzZWYtNGRmZC1iOGY3LTRjYTdiYzMyZWMyNCIsImMiOjh9"
      frameBorder="0"
      allowFullScreen="true"
    />
  </Wrapper>
)
export default DataChart
