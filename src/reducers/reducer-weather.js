import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  console.log('Action received', action);
  switch (action.type) {
    // case 'FETCH_WEATHER':  //This is something Brittle, something fragile. Mong manh de vo
    case FETCH_WEATHER:
      return [action.payload.data, ...state];       //[city, city, city]
      // return state.concat ( [action.payload.data] );
      //concat, this is new
  }
  return state;
}
