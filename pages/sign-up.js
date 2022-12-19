import React, { Fragment } from 'react';
import withLayout from '../src/hoc/layout';
import Login from '../src/components/Login';

const SignUpPage = () => <Login signUp />;
export default withLayout(SignUpPage);
