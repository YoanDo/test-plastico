import React from 'react';
import { array } from 'prop-types';
import { useSelector } from 'react-redux';
import { getUserLanguage } from '../redux/selectors/ui';
import Accordions from '../components/UI/Accordions';

const DataFaq = ({ faqs }) => {
  const userLang = useSelector(getUserLanguage);

  if (!faqs) {
    return null;
  }

  const filteredAndOrderedFaqs = faqs
    .slice() // Create a shallow copy of the array to avoid mutating the original
    .sort((a, b) => a.position - b.position)
    .map((faq) => ({
      question: faq[`question_${userLang}`],
      answer: faq[`answer_${userLang}`]
    }));

  return <Accordions data={filteredAndOrderedFaqs} />;
};

DataFaq.propTypes = {
  faqs: array
};

export default DataFaq;
