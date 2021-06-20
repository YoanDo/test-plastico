import React from 'react'
import Solutions from '../components/Solutions'
import { useSelector } from 'react-redux'
import { getAllSolutions, getIsSolutionsLoading } from '../redux/selectors/solutions'
import { getUserLanguage } from '../redux/selectors/ui'

const SolutionsContainer = () => {
  const solutions = Object.values(useSelector((state) => getAllSolutions(state)))
  const isLoading = useSelector((state) => getIsSolutionsLoading(state))
  const userLang = useSelector((state) => getUserLanguage(state))

  return <Solutions isLoading={isLoading} solutionsList={solutions} lang={userLang} />
}

export default SolutionsContainer
