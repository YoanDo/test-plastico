import React from 'react';
import { Wrapper } from '../../hoc/layout/styles';
import {
  Container,
  Row,
  Col
} from 'reactstrap'
const JoinPdf = props => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col className="">
            pdf en
          </Col>
          <Col className="">
            pdf fr
          </Col>
          <Col className="">
            pdf es
          </Col>
          <Col className="">
            pdf de
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

JoinPdf.propTypes = {

};

export default JoinPdf;