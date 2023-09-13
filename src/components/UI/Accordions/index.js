import React from 'react';
import { array } from 'prop-types';
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion
} from 'reactstrap';
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
      {data.map((faq, index) => {
        const { question, answer } = faq;
        const accordionId = index.toString(); // Unique ID for each accordion item

        return (
          <AccordionItem key={accordionId}>
            <AccordionHeader targetId={accordionId}>{question}</AccordionHeader>
            <AccordionBody accordionId={accordionId}>
              <PortableText value={answer} components={ptComponents} />
            </AccordionBody>
          </AccordionItem>
        );
      })}
    </UncontrolledAccordion>
  </AccordionsWrapper>
);

Accordions.propTypes = {
  data: array
};

export default Accordions;
