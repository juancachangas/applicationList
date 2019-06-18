import React, { Component } from 'react';
import Header from './headerCell';
import logo from './assets/logo.svg';
import './assets/App.css';

export class ApplicationTable extends Component {

  render() {
    const {
      applications,
      sort,
      sortAction,
      filterAction,
      isLoading,
      errorLoading,
      requestApplications,
    } = this.props;

    const orderProps = {
      sort,
      sortAction,
      filterAction
    }
    return (
      <div>
        <nav className='tableHeader'>
          <Header field='name' fieldText='Name' filterable {...orderProps}/>
          <Header field='email' fieldText='Email' {...orderProps}/>
          <Header field='birth_date' fieldText='Age' {...orderProps}/>
          <Header field='year_of_experience' fieldText='Years of experience' {...orderProps}/>
          <Header field='position_applied' fieldText='Position applied' filterable {...orderProps}/>
          <Header field='application_date' fieldText='Date of application' {...orderProps}/>
          <Header field='status' fieldText='Status of the application' filterable {...orderProps}/>
        </nav>
        <main className='tableBody'>
          {applications.map(application =>
            <article className='row' key={application.id}>
              <section className='cell'>{application.name}</section>
              <section className='cell'>{application.email}</section>
              <section className='cell'>{application.birth_date}</section>
              <section className='cell'>{application.year_of_experience}</section>
              <section className='cell'>{application.position_applied}</section>
              <section className='cell'>{application.application_date}</section>
              <section className='cell'>{application.status}</section>
            </article>
          )}
          { isLoading &&
            <div className='loading-box'>
              <img src={logo} className="loading-logo" alt="logo" />
            </div>
          }
          {
            errorLoading && 
            <div className='errorMsg'>
              Sorry, there was an error retrieving the applications <br />
              <button onClick={requestApplications}>Retry</button>
            </div>
          }
        </main>
      </div>
    );
  }
}