import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { Fade } from 'react-awesome-reveal';
import { PO_TEAM } from '../../constants/team';
import { Wrapper, CardWrapper } from './styles';

const TeamCard = dynamic(import('./components/TeamCard'));

const TeamList = () => {
  const [members, setMembers] = useState(null);
  const shuffle = (arr) =>
    [...arr].reduceRight(
      (res, _, __, s) => (
        res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
      ),
      []
    );

  useEffect(() => {
    setMembers(() => {
      setMembers(shuffle(PO_TEAM));
    });
  }, []);

  if (!members) return null;

  return (
    <Wrapper>
      <Fade bottom delay={1000} duration={1100}>
        {members.map(({ name, surname, position, link }) => (
          <CardWrapper key={link}>
            <TeamCard
              name={name}
              surname={surname}
              position={position}
              link={link}
            />
          </CardWrapper>
        ))}
      </Fade>
    </Wrapper>
  );
};

export default React.memo(TeamList);
