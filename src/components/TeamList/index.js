import React from 'react'

import { PO_TEAM } from '../../constants/team'
import { Wrapper, CardWrapper } from './styles'
import dynamic from 'next/dynamic'

const TeamCard = dynamic(import('./components/TeamCard'))

const TeamList = () => {
  const shuffledArrayOfMembers = PO_TEAM.sort(() => Math.random() - 0.5)

  return (
    <Wrapper>
      {shuffledArrayOfMembers.map(({ name, surname, position, link }) => (
        <CardWrapper key={link}>
          <TeamCard name={name} surname={surname} position={position} link={link} />
        </CardWrapper>
      ))}
    </Wrapper>
  )
}

export default TeamList
