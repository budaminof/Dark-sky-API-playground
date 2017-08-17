import p from 'es6-promise';
p.polyfill();
import axios from 'axios';
import { NEW_SEARCH  } from './types';

const geocoder = new google.maps.Geocoder();

export default function (data) {
  console.log("ACTION", data);
  const request =
    axios.get(`https://api.darksky.net/forecast/6b3b58513086d3ad139fc7443d17dcfc/${data.lat},${data.lng}`)
                            .then((data) => {
                                console.log("DARK SKY", data);
                                return data;
                            });

  // return {type: NEW_SEARCH , payload: request};
  };
