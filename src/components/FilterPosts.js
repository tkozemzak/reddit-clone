import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FilterPosts extends Component {
  render () {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter:</Label>
          <Input type="text" name="email" id="filter-field" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Sort By: </Label>
           <Input type="select" name="select" id="exampleSelect">
            <option>Votes</option>
            <option>Date Added</option>
          </Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default FilterPosts