
// @flow
import React from 'react';
import {connect} from 'react-redux'
import { FormGroup, Form, Col, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {getVideos} from '../../actions'

class UpdateVideo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list: props.mock ? props.mock.videodetails : []
    }
  }

  componentWillReceiveProps(nextProps){
    const { mock } = nextProps;
    if(mock) {
      if(mock.videodetails !== this.state.list) {
        this.setState(() => ({ list: mock.videodetails }))
      }
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
    this.props.UpdateVideo(this.state.data);
  }

  render() {  
    debugger  
    const id = parseInt(this.props.match.params.id, 0);
    const { list } = this.state;
    let data = list.filter( item => item.id === id);
    data = data.length > 0 ? data[0] : {};
  return (
      <div className="App-intro">
         {Object.keys(data).length > 1 &&
          <Col md={6} mdPush={3}>
          <Form onSubmit={this.handleSubmit} horizontal>
          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Name of the Movie</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl defaultValue={data.name} name="name" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Director</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl defaultValue={data.director} name="director" type="text" onChange={this.handleChange} />
            </Col>  
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Hero</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl defaultValue={data.hero} name="hero" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          
          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Heroine</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl defaultValue={data.heroin} name="heroin" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Producer</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl defaultValue={data.produced_by} name="produced_by" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Budget</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl defaultValue={data.budjet} name="budget" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={4}>
              <ControlLabel>Language</ControlLabel>
            </Col>     
            <Col sm={8}>           
              <FormControl defaultValue={data.language} name="language" onChange={this.handleChange} componentClass="select" placeholder="select">
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
            <FormControl defaultValue={data.category} name="category" onChange={this.handleChange} componentClass="select" placeholder="select">
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
              <FormControl defaultValue={data.discription} name="discription" type="text" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          
        <Button type="submit">Add</Button>
      </Form>
        </Col>
         }
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    mock:state.getVideos.getVideos,
    add: state.addVideo.add
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateVideos: (obj) => dispatch(getVideos(obj))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateVideo);