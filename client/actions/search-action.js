import axios from 'axios';
import { NEW_DATA } from './types';
  // let data =  {  currently: {
  //   apparentTemperature : 81.2,
  //   cloudCover : 0.18,
  //   dewPoint : 37.22,
  //   humidity : 0.21,
  //   icon : "clear-day",
  //   nearestStormDistance : 0,
  //   ozone : 297.76,
  //   precipIntensity : 0.002,
  //   precipIntensityError : 0,
  //   precipProbability : 0.17,
  //   precipType : "rain",
  //   pressure : 1011.26,
  //   summary : "Clear",
  //   temperature : 81.2,
  //   time : 1503000864,
  //   uvIndex :8,
  //   visibility : 10,
  //   windBearing : 336,
  //   windGust: 13.3,
  //   windSpeed : 4.11
  // },
  // daily: {
  //   data: [
  //     {
  //     apparentTemperatureMax : 84.5,
  //     apparentTemperatureMaxTime : 1503014400,
  //     apparentTemperatureMin : 54.3,
  //     apparentTemperatureMinTime : 1502971200,
  //     cloudCover : 0.08,
  //     dewPoint : 43.48,
  //     humidity : 0.45,
  //     icon : "clear-day",
  //     moonPhase : 0.85,
  //     ozone : 298.42,
  //     precipIntensity : 0.0009,
  //     precipIntensityMax : 0.0048,
  //     precipIntensityMaxTime : 1503003600,
  //     precipProbability : 0.07,
  //     precipType : "rain",
  //     pressure : 1013.85,
  //     summary : "Clear throughout the day.",
  //     sunriseTime : 1502972177,
  //     sunsetTime : 1503021406,
  //     temperatureMax : 84.5,
  //     temperatureMaxTime : 1503014400,
  //     temperatureMin : 54.3,
  //     temperatureMinTime : 1502971200,
  //     time : 1502949600,
  //     uvIndex : 9,
  //     uvIndexTime : 1502996400,
  //     visibility : 10,
  //     windBearing : 272,
  //     windGust : 15.93,
  //     windGustTime : 1503007200,
  //     windSpeed : 2.25
  //     }
  //   ],
  //   icon: "rain",
  //   summary: "Light rain on Sunday through next Thursday, with temperatures peaking at 87°F on Saturday."
  // }};

let ROOT_UTL;

if( window.location.origin === "http://localhost:8080" ) {
  ROOT_UTL = 'http://localhost:3000/api';
  } else { ROOT_UTL = '/api'; }


export default function (data) {
    let request = axios.get(`${ROOT_UTL}/${data.lat}/${data.lng}`)
      return {
        type: NEW_DATA,
        payload: request
      }
  };
