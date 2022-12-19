import React from 'react';
import withLayout from '../src/hoc/layout';
import Login from '../src/components/Login';

const SignUpPage = () => <Login />;
export default withLayout(SignUpPage);
