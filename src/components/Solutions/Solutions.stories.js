import React from 'react';
import Solutions from '.';
import { Wrapper } from '../../hoc/layout/styles';
import { solutionsList } from './fixtures';

export default {
  title: 'Component/Solutions',
  component: Solutions,
  argTypes: {}
};

export const defaultSolution = () => (
  <Wrapper>
    <Solutions solutionsList={solutionsList} />
  </Wrapper>
);
