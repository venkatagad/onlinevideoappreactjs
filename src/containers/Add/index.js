// @flow
import React from 'react';
import {connect} from 'react-redux'
import { addVideo } from '../../actions'
import { FormGroup, Form, Col, FormControl, ControlLabel, Button} from 'react-bootstrap';

class Add extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: {},
    }
  }

  handleChange=(e)=>{
    const { data } = this.state;
    const { name, value } = e.target;
    data[name] = value;
    this.setState(() => ({ data }));
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addVideo(this.state.data);
  }

  render() {
    console.log('history', this.props)
    return (
      <div className="App-intro">
         <Col md={6} mdPush={3}>
          <Form onSubmit={this.handleSubmit} horizontal>
          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Name of the Movie</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl name="name" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Director</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl name="director" type="text" onChange={this.handleChange} />
            </Col>  
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Hero</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl name="hero" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          
          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Heroine</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl name="heroin" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Producer</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl name="produced_by" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Budget</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl name="budget" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Language</ControlLabel>
            </Col>     
            <Col sm={8}>           
              <FormControl name="language" onChange={this.handleChange} componentClass="select" placeholder="select">
                <option value="1">English</option>
                <option value="2">Spanish</option>
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>      
              <ControlLabel>category</ControlLabel>
            </Col>
            <Col sm={8}>
            <FormControl name="category" onChange={this.handleChange} componentClass="select" placeholder="select">
                <option value="1">Premium</option>
                <option value="2">Free</option>
                <option value="3">Tier 1s</option>
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Description</ControlLabel> 
            </Col>
            <Col sm={8}>
              <FormControl name="discription" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          
        <Button type="submit">Add</Button>
      </Form>
        </Col>
      </div>
    );
  }
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addVideo: (value) => dispatch(addVideo(value))
  };
}

export default connect(null, mapDispatchToProps)(Add);
