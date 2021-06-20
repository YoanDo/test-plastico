import { getSolutionCardById, getSolutionsList } from '../graphql/queries'
import { addSolutionDetails, setSolutions, updateSolutionsLoading } from '../redux/actions'
import store from '../redux/store'

export const setSolutionsList = () => {
  getSolutionsList().then((res) => {
    store.dispatch(setSolutions(res))
    store.dispatch(updateSolutionsLoading(false))
  })
}

export const setSolutionsDetails = (solutionId) => {
  getSolutionCardById(solutionId).then((res) => {
    store.dispatch(addSolutionDetails({ solutionId, solutionDetails: res }))
  })
}
