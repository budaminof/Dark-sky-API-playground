import axios from 'axios';
import { NEW_DATA } from './types';

export default function (data) {
    let request = axios.get(`${process.env.ROOT_URL}/${data.lat}/${data.lng}`)
      return {
        type: NEW_DATA,
        payload: request
      }
  };
