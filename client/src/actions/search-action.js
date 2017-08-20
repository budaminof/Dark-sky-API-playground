import axios from 'axios';
import { NEW_DATA } from './types';

export const newSearch =  (data) =>  {
    let request = axios.get(`${process.env.ROOT_URL}/${data.lat}/${data.lng}`)
      return {
        type: NEW_DATA,
        payload: request
      }
  };
