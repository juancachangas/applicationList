import { applicationsState, applicationsLoading, errorLoading, applicationList, getSort, getFilter } from "./applications";

describe('Selectors', () => {
  const state = {
    applications: {
      applicationsLoading: false,
      applications: [
        {
          id: 1,
          name: "Alvin Satterfield",
          email: "cornellbartell@connellyleannon.biz",
          birth_date: "1997-09-07",
          year_of_experience: 5,
          position_applied: "Technician",
          application_date: "2018-07-02",
          status: "rejected",
        },
        {
          id: 2,
          name: "Colette Morar",
          email: "corinnestark@pacocha.co",
          birth_date: "1998-08-03",
          year_of_experience: 3,
          position_applied: "Designer",
          application_date: "2017-11-18",
          status: "waiting",
        },
        {
          id: 3,
          name: "Rosalind Rath DDS",
          email: "sandyankunding@marks.io",
          birth_date: "1980-03-28",
          year_of_experience: 15,
          position_applied: "Orchestrator",
          application_date: "2018-01-31",
          status: "approved",
        },
      ],
      error: undefined,
      filterBy: {
        name: {field: "name", criteria: "ra"}
      },
      sortBy: {
        field: 'years_of_experience',
        direction: 1
      },
    },
  };
  test('applications selector returns application store', () => {
    expect(applicationsState(state)).toEqual(state.applications);
  })

  test('applicationsLoading selector returns loading status', () => {
    expect(applicationsLoading(state)).toBe(false)
  })

  test('error selector returns error loading status', () => {
    expect(errorLoading(state)).toBe(undefined)
  })
  test('filter selector returns filter status', () => {
    expect(getFilter(state)).toEqual({
      name: {field: "name", criteria: "ra"}
    })
  })
  test('sort selector returns sort status', () => {
    expect(getSort(state)).toEqual({
      field: 'years_of_experience',
      direction: 1
    })
  })
  test('applicationsList selector returns application list sorted and filtered', () => {
    expect(applicationList(state)).toEqual([
      {
        id: 2,
        name: "Colette Morar",
        email: "corinnestark@pacocha.co",
        birth_date: "1998-08-03",
        year_of_experience: 3,
        position_applied: "Designer",
        application_date: "2017-11-18",
        status: "waiting",
      },
      {
        id: 3,
        name: "Rosalind Rath DDS",
        email: "sandyankunding@marks.io",
        birth_date: "1980-03-28",
        year_of_experience: 15,
        position_applied: "Orchestrator",
        application_date: "2018-01-31",
        status: "approved",
      }
    ])
  })
});