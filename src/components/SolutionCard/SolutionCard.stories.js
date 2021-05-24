/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import SolutionCard from '.'

export default {
  title: 'Component/Solutions/Card',
  component: SolutionCard,
  argTypes: { isLoading: { control: 'boolean' }, title: { control: 'text' } },
}

const Template = (args) => <SolutionCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'hello',
}
