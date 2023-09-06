import React from 'react';

import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion
} from 'reactstrap';
import { shape, string } from 'prop-types';
import { PortableText } from '@portabletext/react';
import { AccordionsWrapper } from './styles';
import getSanityImageUrl from '../../../helpers/getSanityImageUrl';

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={getSanityImageUrl(value).width(1200).fit('max').auto('format')}
        />
      );
    }
  }
};
const Accordions = ({ data }) => (
  <AccordionsWrapper>
    <UncontrolledAccordion defaultOpen="1">
      {data.map((x, index) => {
        const { question, answer } = x;
        return (
          <AccordionItem>
            <AccordionHeader targetId={index}>{question}</AccordionHeader>
            <AccordionBody accordionId={index}>
              <PortableText value={answer} components={ptComponents} />
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
    answer: string
  })
};

export default Accordions;
