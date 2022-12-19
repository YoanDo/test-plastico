import React from 'react';
import { string, bool } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { ButtonWrapper } from './styles';

const Button = ({ label, negative, fullWidth, onClick }) => (
  <ButtonWrapper negative={negative} fullWidth={fullWidth} onClick={onClick}>
    <FormattedMessage id={label} />
  </ButtonWrapper>
);

Button.propTypes = {
  label: string,
  negative: bool,
  fullWidth: bool
};

Button.defaultProps = {
  label: null,
  negative: false,
  fullWidth: false
};

export default Button;
