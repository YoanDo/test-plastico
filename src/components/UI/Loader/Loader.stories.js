import React from 'react'

import Loader from '.'

export default {
  title: 'UI/Loader',
  component: Loader,
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 100 } },
  },
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithCustomSize = Template.bind({})
WithCustomSize.args = {
  size: 100,
}
