import React, { useState, useRef, useEffect } from 'react'
import PropTypes, { arrayOf, shape } from 'prop-types'

import { SolutionsWrapper, ListWrapper, ListTitle, SolutionCardWrapper, ListSelectBar } from './styles'

const index = ({ solutionsList }) => {
  const [selectedSolution, selectSolution] = useState([null])
  const [selectedRef, setSelectedRef] = useState([null])
  const lineRefs = useRef([])

  useEffect(() => {
    lineRefs.current && setSelectedRef(lineRefs.current[selectedSolution.index])
  }, [selectedSolution])

  console.log('yo', selectedRef?.scrollHeight)

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
      <SolutionCardWrapper>solutions card n° {selectedSolution.id}</SolutionCardWrapper>
    </SolutionsWrapper>
  )
}

index.propTypes = {}

export default index
