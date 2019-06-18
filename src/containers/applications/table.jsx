import { connect } from 'react-redux';
import { ApplicationTable } from '../../components/applications/table';
import { getSort, applicationList, applicationsLoading, errorLoading } from '../../selectors/applications';
import { setSort, setFilter, requestApplications } from '../../actions/applications';

const mapStateToProps = state => {
  return {
    sort: getSort(state),
    applications: applicationList(state),
    isLoading: applicationsLoading(state),
    errorLoading: errorLoading(state),
  };
}
const mapActionsToProps = {
  sortAction: setSort,
  filterAction: setFilter,
  requestApplications,
}
export default connect(mapStateToProps, mapActionsToProps)(ApplicationTable);
