import React from 'react';
import { string, bool } from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { FormattedMessage } from 'react-intl';

import { CartWrapper, Title, Content, ButtonWrapper } from './styles';
import Button from '../UI/Button';

const Cart = ({
  displayTitle,
  isNegative,
  isTargetingSelf,
  label,
  link,
  marginBottom
}) => (
  <Fade direction="up" triggerOnce>
    <CartWrapper
      displayTitle={displayTitle}
      marginBottom={marginBottom}
      isNegative={isNegative}
    >
      <Title isNegative={isNegative}>
        {label && displayTitle && <FormattedMessage id={`${label}_title`} />}
      </Title>
      <Content>{label && <FormattedMessage id={`${label}_content`} />}</Content>
      <ButtonWrapper>
        <a
          href={link}
          target={isTargetingSelf ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          <Button negative={isNegative} fullWidth label={`${label}_cta`} />
        </a>
      </ButtonWrapper>
    </CartWrapper>
  </Fade>
);

Cart.propTypes = {
  displayTitle: bool,
  isNegative: bool,
  isTargetingSelf: bool,
  label: string,
  link: string,
  marginBottom: bool
};

Cart.defaultProps = {
  displayTitle: true,
  isNegative: false,
  isTargetingSelf: false,
  label: null,
  link: null,
  marginBottom: true
};

export default React.memo(Cart);
