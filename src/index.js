import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// import {Router, browserHistory} from 'react-router';
// import routes from './routes'
//hashHistory #, momoryHistory

import App1 from './components/App1';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import reducers from './reducers';

const API_Key = 'AIzaSyCgVW4Oe8TxEgzK8ingfUb6Kh85Rr8twqQ'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


/*--------------------------------------------------------------*/
/* Declare all Components here
// /*--------------------------------------------------------------*/
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       videos: [],
       selectedVideo: null,
     }; //select Video here
      this.videoSearch('reactjs');
  }
  videoSearch(term) {
    /*--------------------------------------------------------------*/
    /* This is familar to AJAX( Asynchronous JavaScript and XML or JSON )
    /*--------------------------------------------------------------*/
    YTSearch({key: API_Key, term: term}, (videos) => {
      // console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <ul>
              <li><Link to="/weatherApp">App2 - Weather App</Link></li>
          </ul>
          <h1>Something went wrong.</h1>
        </div>
      );
    }
    return (
      <div className="sampleReact">
        <SearchBar onSearchTermChange={videoSearch}></SearchBar>
        <ul>
            <li><Link to="/weatherApp">Weather app</Link></li>
        </ul>
          <div className="gridVideo">
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos}>
            </VideoList>
          </div>
        <br/>
      </div>
    );
  }
}

/*--------------------------------------------------------------*/
/* Render To the main page
/*--------------------------------------------------------------*/
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route exact path="/weatherApp" component={App1}></Route>
        </Switch>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.containers'));



/*--------------------------------------------------------------*/
/* State is a plain javascript object that is used to record and react to user
events. Each Class based component has its own state object.
Whenever Component's state is change the component immediately render.

/*--------------------------------------------------------------*/
