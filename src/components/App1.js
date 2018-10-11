import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/BookDetail';
import SearchBarW from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';
import {BrowserRouter, Switch, Link, Route, Other} from 'react-router-dom';

export default class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  /*--------------------------------------------------------------*/
  /* Reload Router
  /*--------------------------------------------------------------*/
  reloadRoute() {
    router.push({ pathname: '/' });
    router.replace({ pathname: '/weatherApp' });
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <ul>
              <li><Link onClick={this.reloadRoute} to="/weatherApp">App2 - Weather App</Link></li>
          </ul>
          <h1>Something went wrong.</h1>
        </div>
      );
    }
    return (
      <div>
        <ul>
          <li><Link to="/">Youtube App</Link></li>
        </ul>
        <h2 className="titleBook">Book List</h2>
        <div className="book">
          <BookList></BookList>
          <BookDetail></BookDetail>
        </div>
        <br/>
        <div className="weather">
          <SearchBarW></SearchBarW>
          <WeatherList></WeatherList>
        </div>
        <br/>
        <div>
          {this.props.children}

        </div>
      </div>

    );
  }
}
