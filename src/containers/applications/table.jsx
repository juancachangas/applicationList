import { connect } from 'react-redux';
import { ApplicationTable } from '../../components/applications/table';
import { getSort, applicationList } from '../../selectors/applications';
import { setSort, setFilter } from '../../actions/applications';

const mapStateToProps = state => {
  return {
    sort: getSort(state),
    applications: applicationList(state),
  };
}
const mapActionsToProps = {
  sortAction: setSort,
  filterAction: setFilter,
}
export default connect(mapStateToProps, mapActionsToProps)(ApplicationTable);
