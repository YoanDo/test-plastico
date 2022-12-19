import React from 'react';
import Goal from './components/Goal';

import { GoalsWrapper } from './styles';

const Goals = () => (
  <GoalsWrapper>
    <Goal label="collect" />
    <Goal label="analyse" delay={100} />
    <Goal label="broadcast" delay={200} />
  </GoalsWrapper>
);
export default Goals;
