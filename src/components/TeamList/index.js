import React, { useEffect, useState } from 'react'

import { PO_TEAM } from '../../constants/team'
import { Wrapper, CardWrapper } from './styles'
import dynamic from 'next/dynamic'

const TeamCard = dynamic(import('./components/TeamCard'))

const TeamList = () => {
  const [members, setMembers] = useState(null)
  const shuffle = (arr) =>
    [...arr].reduceRight((res, _, __, s) => (res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res), [])

  useEffect(() => {
    setMembers(() => {
      setMembers(shuffle(PO_TEAM))
    })
  }, [])

  if (!members) return null

  return (
    <Wrapper>
      {members.map(({ name, surname, position, link }) => (
        <CardWrapper key={link}>
          <TeamCard name={name} surname={surname} position={position} link={link} />
        </CardWrapper>
      ))}
    </Wrapper>
  )
}

export default TeamList
