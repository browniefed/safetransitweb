import mapKeys from "lodash/mapKeys";

const ADD_REPORT = "ADD_REPORT";
const ADD_REPORTS = "ADD_REPORTS";

const reportsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REPORT: {
      return {
        ...state,
        [action.id]: action.report,
      };
    }
    case ADD_REPORTS: {
      return {
        ...state,
        ...mapKeys(action.reports, "id"),
      };
    }
    default:
      return state;
  }
};

export default reportsReducer;
