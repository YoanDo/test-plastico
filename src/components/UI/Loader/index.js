import React from 'react'
import { number } from 'prop-types'
import { LoaderGif } from './styles'

const Loader = ({ size }) => <LoaderGif size={size} />

Loader.propTypes = { size: number }

Loader.defaultProps = { size: 100 }

export default Loader
