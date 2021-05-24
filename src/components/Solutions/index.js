import React, { useState, useRef, useEffect } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

import { SolutionsWrapper, ListWrapper, ListTitle, SolutionCardWrapper, ListSelectBar } from './styles'
import SolutionCard from '../../containers/SolutionCard'

const index = ({ solutionsList }) => {
  const [selectedSolution, selectSolution] = useState({})
  const [selectedRef, setSelectedRef] = useState([null])
  const lineRefs = useRef([])

  useEffect(() => {
    selectSolution({ id: parseInt(solutionsList[0]?.id), index: null })
  }, [solutionsList])

  useEffect(() => {
    lineRefs.current && setSelectedRef(lineRefs.current[selectedSolution.index])
  }, [selectedSolution])

  return (
    <SolutionsWrapper>
      <ListWrapper>
        <ListSelectBar offsetTop={selectedRef?.offsetTop} height={selectedRef?.scrollHeight} />
        {solutionsList.map(({ title_fr, id }, index) => (
          <ListTitle
            isSelected={selectedSolution.id === id}
            ref={(element) => (lineRefs.current[index] = element)}
            key={id}
            onClick={() => selectSolution({ id: id, index: index })}
          >
            {title_fr}
          </ListTitle>
        ))}
      </ListWrapper>
      <SolutionCardWrapper>
        {selectedSolution.id && <SolutionCard selectedSolutionId={selectedSolution.id} />}
      </SolutionCardWrapper>
    </SolutionsWrapper>
  )
}

index.propTypes = {
  lang: string,
  solutionsList: arrayOf(
    shape({
      id: string,
      title_fr: string,
      title_en: string,
    })
  ),
}

index.defaultProps = {
  lang: 'fr',
}

export default index
