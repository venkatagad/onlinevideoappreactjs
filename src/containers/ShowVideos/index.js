
import React from 'react';
import {connect} from 'react-redux'
import {getVideos} from '../../actions'

class ShowVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.getVideos()
  } 

  navigateToUpdate(id) {
    this.props.history.push(`update-video/${id}`);
  }

  render() {
    const { mock } = this.props
    return (
      <div className="App-intro">       
       {mock && (mock.videodetails).map((item, index) => 
            <div key={index} class="col-xs-18 col-sm-6 col-md-3">
              <div className="thumbnail">
                <img src="http://placehold.it/500x300" alt="" />
                  <div className="caption">
                    <h4>Movie Name: {item.name}</h4>
                    <p>Director: {item.director}</p>
                    <p>Hero: {item.hero}</p>
                    <p>Producer: {item.produced_by}</p>
                    <p>Budget: {item.budjet}</p>
                    <p>Description: {item.discription}</p>
                    <p><button type="button" onClick={() => this.navigateToUpdate(item.id)} class="btn btn-info btn-xs">Update</button> </p>
                  </div>
                </div>
            </div>
            )}
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
    getVideos: () => dispatch(getVideos())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowVideos);