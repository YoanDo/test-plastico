import React, { Fragment } from 'react'
import withLayout from '../src/components/Layout'
import Login from '../src/components/Login'

const SignUpPage = () => (
  <Fragment>
    <Login />
  </Fragment>
)
export default withLayout(SignUpPage)
