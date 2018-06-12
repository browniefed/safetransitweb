import mapKeys from "lodash/mapKeys";
import { getReports } from "../api";
const ADD_REPORT = "ADD_REPORT";
const ADD_REPORTS = "ADD_REPORTS";

export const loadReports = page => async dispatch => {
  const data = await getReports(page);
  dispatch(addReports(data));

  return data;
};

export const addReport = report => ({
  type: ADD_REPORT,
  report,
});

export const addReports = reports => ({
  type: ADD_REPORTS,
  reports,
});

const reportsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REPORT: {
      return {
        ...state,
        [action.report.id]: action.report,
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
