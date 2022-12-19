import React from 'react';
import { any, bool, string } from 'prop-types';

import { TextTitle, TitleWrapper } from './styles';
import Breaker from '../UI/Breaker';

const Title = ({ children, color, isBreakerDisplayed }) => (
  <TitleWrapper>
    <TextTitle color={color}>{children}</TextTitle>
    {isBreakerDisplayed && <Breaker color={color} bold />}
  </TitleWrapper>
);

Title.propTypes = {
  children: any,
  color: string,
  isBreakerDisplayed: bool
};

Title.defaultProps = {
  children: null,
  isBreakerDisplayed: true
};
export default Title;
