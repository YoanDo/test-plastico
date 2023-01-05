import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

import { Wrapper, CardWrapper } from './styles';

import { getUserLanguage } from '../../redux/selectors/ui';
import { getAllMembers as getMembers } from '../../redux/selectors/people';
import { getAllMembers } from '../../services/people';
import getSanityImageUrl from '../../helpers/getSanityImageUrl';
import TeamCard from './components/TeamCard';

const TeamList = () => {
  const allMembers = useSelector((state) => getMembers(state));
  const userLanguage = useSelector((state) => getUserLanguage(state));
  const isUserFrench = userLanguage === 'fr';
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState(allMembers);

  const shuffle = (arr) =>
    [...arr].reduceRight(
      (res, _, __, s) => (
        res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
      ),
      []
    );

  useEffect(() => {
    if (!members) {
      getAllMembers().then((res) => {
        setMembers(res);
        setIsLoading(false);
      });
    }
  }, [members]);

  if (isLoading || !members.length) return null;

  return (
    <Wrapper>
      <Fade triggerOnce direction="up" cascade damping={0.07} duration={1100}>
        {shuffle(members).map(
          ({
            firstName,
            lastName,
            job_fr: jobFr,
            job_en: jobEn,
            avatar,
            link
          }) => {
            const job = isUserFrench ? jobFr : jobEn;
            const imageUrl =
              getSanityImageUrl(avatar).width(220).url() || 'null';
            return (
              <CardWrapper key={link}>
                <TeamCard
                  name={firstName}
                  surname={lastName}
                  position={job}
                  link="link_to_add"
                  imageUrl={imageUrl}
                />
              </CardWrapper>
            );
          }
        )}
      </Fade>
    </Wrapper>
  );
};

export default React.memo(TeamList);
