import { combineReducers } from 'redux';
import bookReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import WeatherReducer from './reducer-weather';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: bookReducer,
  activeBook: ActiveBook,
  weather: WeatherReducer

});

export default rootReducer;
