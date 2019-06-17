import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {

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
  render() {
    const {
      fieldText,
      field,
      sort = {field: '', direction : 0},
    } = this.props;
    return (
      <div
        onClick={this.getOrder}
        style={{margin: '0', cursor: 'pointer'}}
        >
        {fieldText}
        <i className={classNames('fa',{
          'fa-caret-up': sort.field === field && sort.direction === 1,
          'fa-caret-down': sort.field === field && sort.direction === -1,
          'fa-minus': sort.field !== field || !sort.direction,
        })}
        style={{marginLeft: '5px'}}></i>
      </div>
    );
  }
}

export default Header;
