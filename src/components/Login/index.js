import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FormattedMessage } from 'react-intl';
import { bool } from 'prop-types';

import SignUpForm from '../Forms/SignUp';
import SignInForm from '../Forms/SignIn';

import {
  Wrapper,
  Claim,
  ClaimWrapper,
  InnerSpace,
  Left,
  Right
} from './styles';

const Login = ({ signUp }) => {
  const [showSignUp, setSignUp] = useState(signUp);

  return (
    <Wrapper>
      <Left>
        <InnerSpace>
          <ClaimWrapper>
            <Claim>
              <Fade bottom delay={200} duration={1600}>
                <FormattedMessage id="get_involved_1" />
              </Fade>
            </Claim>
            <Claim>
              <Fade bottom delay={600} duration={1000}>
                <FormattedMessage id="get_involved_2" />
              </Fade>
            </Claim>
          </ClaimWrapper>
        </InnerSpace>
      </Left>
      <Right>
        <InnerSpace>
          {/* error with react-form */}
          {/* {showSignUp ? (
            <SignUpForm switchToSignIn={() => setSignUp(false)} />
          ) : (
            <SignInForm switchToSignUp={() => setSignUp(true)} />
          )} */}
        </InnerSpace>
      </Right>
    </Wrapper>
  );
};

export default React.memo(Login);

Login.propTypes = {
  signUp: bool
};

Login.defaultProps = {
  signUp: false
};
