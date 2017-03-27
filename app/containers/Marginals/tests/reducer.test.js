
import { fromJS } from 'immutable';
import marginalsReducer from '../reducer';

describe('marginalsReducer', () => {
  it('returns the initial state', () => {
    expect(marginalsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
