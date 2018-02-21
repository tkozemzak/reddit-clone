import React, { Component } from 'react'

class FilterPosts extends Component {
  render () {
    return (
      <ul className="nav nav-pills">
        <li role="presentation" className="active">
          <input type="search" className="form-control input-sm search-form" placeholder="Filter"/>
        </li>
        <div className="form-inline">
          <label htmlFor="sort">  Sort by </label>
          <select className="form-control" id="sort">
            <option>Some text</option>
            <option>Some text</option>
          </select>
        </div>
      </ul>
    )
  }
}

export default FilterPosts