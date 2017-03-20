
import { fromJS } from 'immutable';
import inspiratorsReducer from '../reducer';

describe('inspiratorsReducer', () => {
  it('returns the initial state', () => {
    expect(inspiratorsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
