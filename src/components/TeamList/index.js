import React from 'react'

import { PO_TEAM } from '../../constants/team'
import shuffle from '../../helpers/shuffle'
import { Wrapper, CardWrapper } from './styles'
import dynamic from 'next/dynamic'

const TeamCard = dynamic(import('./components/TeamCard'))

const TeamList = () => (
  <Wrapper>
    {shuffle(PO_TEAM).map(({ name, surname, position, link }) => (
      <CardWrapper key={link}>
        <TeamCard name={name} surname={surname} position={position} link={link} />
      </CardWrapper>
    ))}
  </Wrapper>
)

export default TeamList
