import axios from 'axios';
import { NEW_DATA } from './types';

let ROOT_URL;

if( window.location.origin === "http://localhost:8080" ) {
  ROOT_URL = 'http://localhost:3000/api';
} else { ROOT_URL = '/api'; }

export default function (data) {
    let request = axios.get(`${ROOT_URL}/${data.lat}/${data.lng}`)
      return {
        type: NEW_DATA,
        payload: request
      }
  };
