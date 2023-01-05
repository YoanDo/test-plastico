import React from 'react';
import { string, number } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import { GoalWrapper, Title } from './styles';

const Goal = ({ label, delay }) => (
  <GoalWrapper>
    <Fade direction="up" delay={delay}>
      <>
        <Title>
          <FormattedMessage id={`${label}_title`} />
        </Title>
        <span>
          <FormattedMessage id={`${label}_text`} />
        </span>
      </>
    </Fade>
  </GoalWrapper>
);

Goal.propTypes = {
  label: string,
  delay: number
};

Goal.defaultProps = {
  label: null,
  delay: 0
};

export default React.memo(Goal);
