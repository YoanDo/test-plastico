import React, { useEffect } from 'react'
import JoinPdf from '../../components/JoinPDF'
import JoinUsHeader from '../../components/JoinUsHeader'
import JoinVisio from '../../components/JoinVisio'
import JoinVideo from '../../containers/JoinVideo'
import { Wrapper } from '../../hoc/layout/styles'

const JoinUsPage = () => (
  <>
    <Wrapper>
      <JoinUsHeader />
      <JoinVisio />
      <JoinVideo />
      <JoinPdf />
    </Wrapper>
  </>
)

export default JoinUsPage