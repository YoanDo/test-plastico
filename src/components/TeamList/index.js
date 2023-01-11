import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import { array, string } from 'prop-types';
import { TeamWrapper, CardWrapper, Wrapper } from './styles';

import { getUserLanguage } from '../../redux/selectors/ui';
import getSanityImageUrl from '../../helpers/getSanityImageUrl';
import TeamCard from './components/TeamCard';

const TeamList = ({ title, members }) => {
  const userLanguage = useSelector((state) => getUserLanguage(state));
  const isUserFrench = userLanguage === 'fr';

  const shuffle = (arr) =>
    [...arr].reduceRight(
      (res, _, __, s) => (
        // eslint-disable-next-line no-bitwise, no-sequences
        res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
      ),
      []
    );

  return (
    <Wrapper>
      {title && (
        <h2>
          <FormattedMessage id={title} />
        </h2>
      )}
      <TeamWrapper>
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
      </TeamWrapper>
    </Wrapper>
  );
};

TeamList.propTypes = {
  members: array,
  title: string
};

export default React.memo(TeamList);
