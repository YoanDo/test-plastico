import React, { useState, useRef, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import {
  SolutionsWrapper,
  ListWrapper,
  ListTitle,
  SolutionCardWrapper,
  ListSelectBar
} from './styles';
import SolutionCard from '../../containers/SolutionCard';
import theme from '../../assets/theme';

const index = ({ solutionsList, lang }) => {
  const [selectedSolution, selectSolution] = useState({});
  const [selectedRef, setSelectedRef] = useState([null]);
  const lineRefs = useRef([]);
  const solutionRef = useRef(null);

  const isBelowLaptop = useMediaQuery({
    query: `(max-width: ${theme.size.laptop})`
  });
  const scrollToSolution = () => {
    solutionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSolutionSelection = (id, index) => {
    selectSolution({ id, index });
    isBelowLaptop && scrollToSolution();
  };
  useEffect(() => {
    lineRefs.current &&
      setSelectedRef(lineRefs.current[selectedSolution.index]);
  }, [selectedSolution]);

  useEffect(() => {
    selectSolution({ id: solutionsList?.[0]?.id, index: 0 });
  }, [solutionsList.length]);

  return (
    <SolutionsWrapper>
      <ListWrapper>
        <ListSelectBar
          offsetTop={selectedRef?.offsetTop}
          height={selectedRef?.scrollHeight}
        />
        {solutionsList.map((solution, index) => {
          const { title } = solution[lang];
          const { id } = solution;

          return (
            <ListTitle
              isSelected={selectedSolution.id === id}
              ref={(element) => (lineRefs.current[index] = element)}
              key={id}
              onClick={() => handleSolutionSelection(id, index)}
            >
              {title}
            </ListTitle>
          );
        })}
      </ListWrapper>
      <SolutionCardWrapper ref={solutionRef}>
        {selectedSolution.id && (
          <SolutionCard lang={lang} selectedSolutionId={selectedSolution.id} />
        )}
      </SolutionCardWrapper>
    </SolutionsWrapper>
  );
};

index.propTypes = {
  lang: string,
  solutionsList: arrayOf(
    shape({
      id: string,
      en: shape(),
      fr: shape()
    })
  )
};

index.defaultProps = {
  lang: 'fr'
};

export default index;
