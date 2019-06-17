import { createSelector } from "reselect";


export const applicationsState = state => state.applications;

export const applicationsLoading = createSelector(
  applicationsState, applications => applications.applicationsLoading);

export const error = createSelector(
  applicationsState, applications => applications.error);
  
export const getSort = createSelector(
  applicationsState, applications => applications.sortBy);

export const getFilter = createSelector(
  applicationsState, applications => applications.filterBy);

export const applicationList = createSelector(
  applicationsState,
  ({applications = [], filterBy={}, sortBy}) => {
    
    const filteredList = applications.filter(item => {
      return Object.values(filterBy).reduce((accumulator ,filter) => {
        const field = filter.field;
        const criteria = filter.criteria.toLowerCase()
        const itemField = item[field].toLowerCase()
        return accumulator && (
          criteria.includes(itemField) ||
          itemField.includes(criteria)
        )
        
      }, true)
    })
    return filteredList.sort((
      registerA, registerB
    ) => {
      const field = sortBy.field
      let a = registerA[field];
      let b = registerB[field];
      if(field === 'application_date') {
        a = new Date(a);
        b = new Date(b);
      }
      // register a should come before register b
      if (a < b) {
        return -1 * sortBy.direction;
      }
      // register b should come before register a
      if (a > b) {
        return 1 * sortBy.direction;
      }
      // equal values
      return 0;
    });
  }
)
