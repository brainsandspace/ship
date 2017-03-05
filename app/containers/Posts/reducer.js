/*
 *
 * Posts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_POST,
} from './constants';

const initialState = fromJS({ currentPost: null });

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POST:
      return { currentPost: action.filename }
    default:
      return state;
  }
}

export default postsReducer;
