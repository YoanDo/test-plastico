import React from 'react';

import Accordions from '.';

export default {
  title: 'UI/Accordions',
  component: Accordions,
  argTypes: {}
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Accordions {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [{ question: "What's your name ?", answer: 'Brrrbrrrbrr' }]
};
