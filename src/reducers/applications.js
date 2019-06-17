import {
  APPLICATIONS_SET_REQUEST,
  APPLICATIONS_SET_ERROR,
  APPLICATIONS_SET_SUCCESS,
  APPLICATIONS_SET_FILTER,
  APPLICATIONS_SET_SORT,
} from '../actions/applications';

const initialState = {
  applicationsLoading: false,
  applications: [],
  error: undefined,
  filterBy: [],
  sortBy: {},
};

export default (state = initialState, { type, payload = {}, error }) => {
  const reducer = {
    [APPLICATIONS_SET_FILTER]: {
      ...state,
      filterBy: payload.filter,
    },
    [APPLICATIONS_SET_SORT]: {
      ...state,
      sortBy: payload.sort,
    },
    [APPLICATIONS_SET_REQUEST]: {
      ...state,
      applicationsLoading: true,
    },
    [APPLICATIONS_SET_REQUEST]: {
      ...state,
      applicationsLoading: true,
    },
    [APPLICATIONS_SET_ERROR]: {
      ...state,
      applicationsLoading: false,
      error: error,
    },
    [APPLICATIONS_SET_SUCCESS]: {
      ...state,
      applicationsLoading: false,
      applications: payload.applications,
    }
  }
  return reducer[type] || state
};
