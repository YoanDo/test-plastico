import { createReducer } from '@reduxjs/toolkit';
import { addSolutionDetails, setSolutions } from '../../actions';

const initialState = {};

const isLoading = createReducer(initialState, {
  [setSolutions]: (state, actions) => actions.payload,
  [addSolutionDetails]: (state, actions) => {
    const { solutionId, solutionDetails } = actions.payload;

    return {
      ...state,
      [solutionId]: {
        ...solutionDetails
      }
    };
  }
});

export default isLoading;
