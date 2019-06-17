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
  filterBy: {},
  sortBy: {},
};

export default (state = initialState, { type, payload, error }) => {
  switch(type){
    case APPLICATIONS_SET_FILTER: 
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
        [payload.filter.field]: payload.filter
        },
      }
    case APPLICATIONS_SET_SORT: 
      return {
        ...state,
        sortBy: payload.sort,
      }
    case APPLICATIONS_SET_REQUEST: 
      return {
        ...state,
        applicationsLoading: true,
      }
    case APPLICATIONS_SET_ERROR: 
      return {
        ...state,
        applicationsLoading: false,
        error: error,
      }
    case APPLICATIONS_SET_SUCCESS: 
      return {
        ...state,
        applicationsLoading: false,
        applications: payload.applications,
      }
    default:
      return state;
    }
};
