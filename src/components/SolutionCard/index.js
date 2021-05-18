import React from 'react'
import PropTypes from 'prop-types'

const index = ({ data }) => {
  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(
            {
              data,
            },
            null,
            2
          )}
        </code>
      </pre>
    </div>
  )
}

index.propTypes = {}

export default index
