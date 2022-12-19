import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import { About, HeaderWrapper, Illustration, Wrapper, Title } from './styles';

const SolutionsHeader = () => (
  <Wrapper>
    <HeaderWrapper>
      <Title>Solutions</Title>
      <Container>
        <Row>
          <Col md="6" className="my-2">
            <About id="about">
              <span>
                <FormattedMessage id="solution_intro_1" />
              </span>
            </About>
          </Col>
          <Col md="6" className="my-2">
            <Illustration />
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  </Wrapper>
);

SolutionsHeader.propTypes = {};

export default SolutionsHeader;
