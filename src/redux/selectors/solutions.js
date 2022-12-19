export const getAllSolutions = (state) => state?.solutions.allSolutions;
export const getIsSolutionsLoading = (state) => state?.solutions.isLoading;
export const getSolutionLoadById = (state, id) =>
  state?.solutions.allSolutions[id]?.isFullyLoaded;
export const getSolutionById = (state, id) => state?.solutions.allSolutions[id];
