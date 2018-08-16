import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FilterPosts extends Component {
  state = {
    filterPhrase: ''
  }
  render () {

    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter by title:</Label>
          <Input type="text" name="email" id="filter-field" />
        </FormGroup>
      </Form>
    )
  }
}

export default FilterPosts
