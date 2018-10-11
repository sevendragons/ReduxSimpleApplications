import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map( weather => weather.main.temp), (temp) => temp - 273.15);
    const humidities = cityData.list.map( weather => weather.main.humidity);
    const pressures = cityData.list.map( weather => weather.main.pressure);
    const {lon, lat} = cityData.city.coord;
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;

    // if (error) {
    //   return (<div>Eh!! Wrong City!</div>)
    // }
    // <span>{ name }</span>
    return (
      <tr key={ name }>
        <td className="Gmap"><GoogleMap lat={lat} lon={lon}></GoogleMap></td>
        <td>
          <Chart data={temps} color="purple" units="℃"></Chart>
        </td>
        <td>
          <Chart data={pressures} color="blue" units ="hPa"></Chart>
        </td>
        <td>
          <Chart data={humidities} color="red" units="%"></Chart>
        </td>
      </tr>
    );
  }

  render() {
    if (!this.props.weather) {
      return (<div>Select a city - Redux don't allow a null value -- Weird</div>);
    }
    return (
      <table className="table table-hover weatherList">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature<span> (Celcius)</span></th>
            <th>Pressure<span>HPA (hectoPascal - 1hPa = 100Pa)</span></th>
            <th>Humidity<span> %</span></th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state){return { weather: state.weather}}

function mapStateToProps({weather}){
    return { weather };  //It assigns in reducers/index.js

}

export default connect(mapStateToProps)(WeatherList);
