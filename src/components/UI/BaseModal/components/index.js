import React from 'react';
import { string, node } from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Title, Text, WrapperBody } from '../styles';

export const ModalHeader = ({ title }) => (
  <div center>
    <Title>
      <FormattedMessage id={title} />
    </Title>
  </div>
);

ModalHeader.defaultProps = {
  title: null
};
ModalHeader.propTypes = {
  title: string
};

export const ModalBody = ({ children }) => (
  <WrapperBody>{children}</WrapperBody>
);

ModalBody.defaultProps = {
  children: null
};
ModalBody.propTypes = {
  children: node
};

export const ModalText = ({ children }) => <Text>{children}</Text>;

ModalText.defaultProps = {
  children: null
};
ModalText.propTypes = {
  children: node
};
