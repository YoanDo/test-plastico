import React from 'react'

import ArticleCard from '.'

export default {
  title: 'Blog/ArticleCard',
  component: ArticleCard,
  argTypes: {
    // title: {  } },
  },
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) =>
  <div style={{ width: '200px' }}>
    <ArticleCard {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
  title: "Sécuriser les poubelles contre le vent",
  description: "Sécuriser les poubelles contre le ventSécuriser les poubelles contre le ventSécuriser les poubelles contre le ventSécuriser les poubelles contre le vent",
  imageUrl: "https://images.pexels.com/photos/6128127/pexels-photo-6128127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  creationDate: "2022-10-09T10:27:01Z"
}


