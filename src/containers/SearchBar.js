import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super (props);

    this.state = { term: ''}
    this.onInputChangeWeather = this.onInputChangeWeather.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChangeWeather(e){
    // console.log(e.target.value);
    this.setState({term: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

    // We need to go and FETCH weather data
  }

  render() {
    //this is component state not application state
    return (
      <form onSubmit={this.onFormSubmit} className="searchWeather input-group">
        <input placeholder="Get a five days forecast in your favorite cities."
               type="text"
               className="inputWeather form-control"
               value={this.state.term}
               onChange={this.onInputChangeWeather}
               />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>

    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchWeather }, dispatch )
}

export default connect(null, mapDispatchToProps)(SearchBar);
