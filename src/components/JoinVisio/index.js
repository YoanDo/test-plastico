import React from 'react';
import { Wrapper } from '../../hoc/layout/styles'
import { Container, Row, Col } from "reactstrap"
import Cart from '../Cart';

const JoinVisio = () => {
  return (
    <Wrapper>
      <Cart 
        label="get_involved_zoom" 
        link={"https://us02web.zoom.us/meeting/register/tZ0rc-utpzgqGdR0Kn3NDRgFuq4saddL9ugz"} 
        isNegative
       />
    </Wrapper>
  );
};

JoinVisio.propTypes = {

};

export default JoinVisio;