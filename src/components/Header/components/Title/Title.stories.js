import React from 'react'
import Title from '.'

export default {
  title: 'UI/Title',
  component: Title,
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
