import React from 'react';

import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

import { Wrapper } from '../../hoc/layout/styles';
import ptComponents from '../../helpers/ptComponents';

const ContentWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

function Legal({ data }) {
  const { content } = data;
  return (
    <Wrapper>
      <ContentWrapper>
        <PortableText value={content} components={ptComponents} />
      </ContentWrapper>
    </Wrapper>
  );
}

export default Legal;
