import React from 'react';
import { string } from 'prop-types';
import { Wrapper, TitlePrimary, TitleSecondary } from './styles.js';

const Title = ({ label }) => (
  <Wrapper>
    <TitlePrimary>{label}</TitlePrimary>
    <TitleSecondary>{label}</TitleSecondary>
  </Wrapper>
);

Title.propTypes = {
  label: string
};

Title.defaultProps = {
  label: null
};

export default Title;
