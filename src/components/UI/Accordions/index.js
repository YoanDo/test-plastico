import React from 'react';

import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion
} from 'reactstrap';
import { shape, string } from 'prop-types';
import { AccordionsWrapper } from './styles';

const Accordions = ({ data }) => (
  <AccordionsWrapper>
    <UncontrolledAccordion defaultOpen="1">
      {data.map((x, index) => {
        const { question, answer } = x;
        return (
          <AccordionItem>
            <AccordionHeader targetId={index}>{question}</AccordionHeader>
            <AccordionBody accordionId={index}>
              <p>{answer}</p>
            </AccordionBody>
          </AccordionItem>
        );
      })}
    </UncontrolledAccordion>
  </AccordionsWrapper>
);

Accordions.propTypes = {
  data: shape({
    question: string,
    answer: string,
  })
};

export default Accordions;
