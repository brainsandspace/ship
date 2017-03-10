
import { fromJS } from 'immutable';
import davidReducer from '../reducer';

describe('davidReducer', () => {
  it('returns the initial state', () => {
    expect(davidReducer(undefined, {})).toEqual(fromJS({}));
  });
});
