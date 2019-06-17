import React, { Component } from 'react';
import { requestApplications } from 'actions/applications';
import { connect } from 'react-redux';

import './App.css';
import ApplicationTable from '../applications/table';
import { applicationsLoading, error } from '../../selectors/applications';

export class App extends Component {
  componentDidMount() {
    this.props.requestApplications();
  }
  render() {
    return (
      <div className='tableView'>
        <ApplicationTable />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    applicationsLoading: applicationsLoading(state),
    applicationsError: error(state),
  };
}
const mapActionsToProps = {
  requestApplications,
};

export default connect(mapStateToProps,mapActionsToProps)(App);
