import { ERROR } from './types';

export const handleError = () => {
  return {
    type: ERROR,
    payload: true
  }
}
