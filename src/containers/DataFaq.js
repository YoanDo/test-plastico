import React from 'react';
import { array } from 'prop-types';
import { useSelector } from 'react-redux';
import { getUserLanguage } from '../redux/selectors/ui';
import Accordions from '../components/UI/Accordions';

const DataFaq = ({ faqs }) => {
  const userLang = useSelector((state) => getUserLanguage(state));

  if (!faqs) return null;

  const transformedFaqs = faqs.map((faq) => ({
    question: faq[`question_${userLang}`],
    answer: faq[`answer_${userLang}`]
  }));

  return <Accordions data={transformedFaqs} />;
};

DataFaq.propTypes = {
  faqs: array
};

export default DataFaq;
