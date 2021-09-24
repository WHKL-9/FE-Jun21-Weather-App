import { initialState } from "../store";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILL_RESULTS":
      return {
        ...state,
        results: action.payload,
      };
    case "FILL_RESULTS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "FILL_RESULTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
