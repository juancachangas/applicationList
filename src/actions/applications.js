
export const APPLICATIONS_SET_REQUEST = 'APPLICATIONS_SET_REQUEST';
export const APPLICATIONS_SET_ERROR = 'APPLICATIONS_SET_ERROR';
export const APPLICATIONS_SET_SUCCESS = 'APPLICATIONS_SET_SUCCESS';
export const APPLICATIONS_SET_FILTER = 'APPLICATIONS_SET_FILTER';
export const APPLICATIONS_SET_SORT = 'APPLICATIONS_SET_SORT';

export const setFilter = (filter) => ({
  type: APPLICATIONS_SET_FILTER,
  payload: filter
});

export const setSort = (sort) => ({
  type: APPLICATIONS_SET_SORT,
  payload: sort
});
