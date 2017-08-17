// import p from 'es6-promise';
// p.polyfill();
import axios from 'axios';
import { NEW_SEARCH  } from './types';

let ROOT_UTL;

if(window.location.origin === "http://localhost:8080") {
  ROOT_UTL = 'http://localhost:3000/api';
  } else { ROOT_UTL = '/api'; }


export default function (data) {
  console.log("ACTION", data);
  const request = axios.get(`${ROOT_UTL}/${data.lat}/${data.lng}`).then((res) => {
                                console.log("DARK SKY", res);
                                return data;
                            });

  // return {type: NEW_SEARCH , payload: request};
  };
