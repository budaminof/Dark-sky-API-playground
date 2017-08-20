import { ERROR } from './types';

export default function (error) {
  return {
    type: ERROR,
    payload: true
  }
}
