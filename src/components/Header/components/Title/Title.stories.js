import React from 'react'
import { withKnobs, string } from '@storybook/addon-knobs'
import Title from '.'

export default {
  title: 'UI/Title',
  component: Title,
  decorators: [withKnobs],
}

const baseProps = {
  label: 'Plastic origins',
}

export const withDynamicVariables = () => {
  const dynamicProps = {
    ...baseProps,
  }

  return (
    <div style={{ background: 'black' }}>
      <Title {...dynamicProps} />
    </div>
  )
}
