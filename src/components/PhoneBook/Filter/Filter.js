import { Component } from 'react';
import PropTypes from 'prop-types';



class Filter extends  Component{

  render() {
    return(
      <label>Find Contacts by name
        <input name="filter" type='text' value={this.props.value} onChange={this.props.onChange}/>
      </label>
    )
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Filter;
