import React from 'react'
import TeamCard from '.'

export default {
  title: 'Component/TeamCard',
  component: TeamCard,
  argTypes: {
    position: { control: 'text' },
  },
}

const baseProps = {
  name: 'Antoine',
  surname: 'Bruge',
  position: 'Founder',
  link: 'https://www.lacanausurfinfo.com/page/36/previsions-surf-plage.html',
}

export const withDynamicVariables = () => {
  const dynamicProps = {
    ...baseProps,
  }

  return <TeamCard {...dynamicProps} />
}
