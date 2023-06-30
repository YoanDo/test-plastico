import React from 'react';
import { array } from 'prop-types';
import { useSelector } from 'react-redux';
import { getUserLanguage } from '../redux/selectors/ui';

const DataFaq = ({ faqs }) => {
  const userLang = useSelector((state) => getUserLanguage(state));

  if (!faqs) return null;

  const transformedFaqs = faqs.map((faq) => ({
    question: faq[`question_${userLang}`],
    answer: faq[`answer_${userLang}`]
  }));

  return (
    <pre>
      <code>
        {JSON.stringify(
          {
            transformedFaqs
          },
          null,
          2
        )}
      </code>
    </pre>
  );
};

DataFaq.propTypes = {
  faqs: array
};

export default DataFaq;
