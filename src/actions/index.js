import axios from 'axios';

const API_Key_Weather = '4bf3771caf573de84e5a687eea1dff65';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_Key_Weather}`;
// const ROOT_URL = '5/forecast?appid=${API_Key_Weather}' + API_Key_Weather;

export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},ca`;    //Grap the URL push to the code below to fetch data.
    const request = axios.get(url)           //This is kind of AJAX.
                         // .then((city) => { city.name })
                         // .catch((error) => {
                           // console.log('error');
                           // return (<div>Eh!! Wrong City!</div>)
                         // });
    console.log('Request', request);

     // Axios return a promise that is the data you input in search bar.
     // This promise doesn't actually contain any data
     // The return promise (request) that is the payload key
    return {
      type: 'FETCH_WEATHER',
      payload: request

      /*--------------------------------------------------------------*/
      /* If A payload is a promise. Redux Promise (the framework) stops the action entirely.
      #Once the request finishes it dispatches (send) a new action of the same type but with the PAYLOAD

      ##Cong Dung (Benefit from) Middleware that it stops the promise and it stops action in its tracks until the promise is resolved and then it goes off.

      ##After promise resolves or the AJAX work their job.
      /*--------------------------------------------------------------*/
    };
}

export function selectBook (book) {
  // selectBook is an ActionCreators, it needs to return an action,
  // an Object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
  console.log('A Book has been selected: ', book.title );
}

/*--------------------------------------------------------------*/
/* Payload is an optional property that goes along with actions that can contain some additional data that describes this particular action.
/*--------------------------------------------------------------*/



/*--------------------------------------------------------------*/
/* Middleware as a gatekeepers of sorts, a doorman, bouncer.
It Stops ant actions they inspected and check the condition of that actions
Or even they (Middleware) can allow you to get or fetch the data and change the particular value
When you request.

#Middleware is allowed us to do kind of intercepting, obstruction (Ngan chan & kiem tra)
#Middleware can modify the actions, that mean all the actions will flow through the Middleware
#Middleware is just a function, so we can have many Middleware or zero Middleware
/*--------------------------------------------------------------*/
