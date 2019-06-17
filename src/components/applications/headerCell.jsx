import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {
  state = {
    filterValue: '',
    openFilter: false
  }
  filterInput = null;
  getOrder = () => {
    const {
      sort: {
        direction = -1
      },
      field,
      sortAction,
    } = this.props;
    sortAction({field, direction: direction * -1});
  }
  handleChange = (evt) => {
    const newValue = evt.target.value;
    this.setState({filterValue: newValue});
    const {
      filterAction,
      field,
    } = this.props;
    filterAction({field, criteria: newValue })
  }
  render() {
    const {
      fieldText,
      field,
      filterable,
      sort = {field: '', direction : 0},
    } = this.props;
    const {
      filterValue,
      openFilter,
    } = this.state;
    return (
      <div
        onClick={this.getOrder}
        style={{margin: '0', cursor: 'pointer'}}
        >
        {fieldText}
        <div className='actions'>
          {filterable && 
            <button className='actions__filter'
              onClick={(e)=> {
                e.stopPropagation();
                this.setState({openFilter: true}, () => 
                this.filterInput.focus());
              }}><i className='fa fa-filter'/></button>
          }
          <i className={classNames('fa',{
            'fa-caret-up': sort.field === field && sort.direction === 1,
            'fa-caret-down': sort.field === field && sort.direction === -1,
            'fa-minus': sort.field !== field || !sort.direction,
          })}
          style={{marginLeft: '5px'}}></i>
        </div>
        <article className={classNames(
          'filterBox',
          {active: openFilter}
        )}>
          <button className='closeFilter'
              onClick={(e)=> {
                e.stopPropagation();
                this.setState({openFilter: false});
              }}><i className='fa fa-times'/></button>
          <p>Filter {fieldText}:</p>
          <input
            type='text'
            value={filterValue}
            onChange={this.handleChange}
            ref={input => this.filterInput = input}
            onBlur={()=> setTimeout(() => {
              this.setState({openFilter: false});
            }, 300)}
            />
        </article>
      </div>
    );
  }
}

export default Header;
