import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import { useMediaQuery } from 'react-responsive';

import { Wrapper } from '../../hoc/layout/styles';
import { About, AboutImage, Left, Section } from './styles';
import Title from '../Title';
import Goals from './components/Goals';

const Project = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <Wrapper>
      {isTabletOrMobile && <span name="project" />}
      <Section>
        <Title>
          <>
            <FormattedMessage id="our_mission_1" /> <br />
            <FormattedMessage id="our_mission_2" />
          </>
        </Title>
        <Left>
          {!isTabletOrMobile && <span name="project" />}
          <Fade bottom>
            <About>
              <span>
                "
                <FormattedMessage id="about_us_1" />
              </span>
              <span>
                <FormattedMessage id="about_us_2" />"
              </span>
            </About>
          </Fade>
          <AboutImage />
        </Left>
      </Section>
      <Section>
        <Goals />
      </Section>
    </Wrapper>
  );
};
export default React.memo(Project);
