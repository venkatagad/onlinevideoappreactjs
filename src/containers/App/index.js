// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';

// Route components
import Home from '../Home';
import ShowVideos from '../ShowVideos';
import UpdateVideo from '../UpdateVideo';
import Add from '../Add';

// UI Components
import Site from '../../components/Site';


class App extends React.Component {
  render() {
    return (
      <Site>
        <Site.Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/add-video" component={Add} />
        <Route exact path="/show-videos" component={ShowVideos} />
        <Route exact path="/update-video/:id" component={UpdateVideo} />
      </Site>
    );
  }
};

export default App;
