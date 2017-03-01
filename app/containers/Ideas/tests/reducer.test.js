
import { fromJS } from 'immutable';
import ideasReducer from '../reducer';

describe('ideasReducer', () => {
  it('returns the initial state', () => {
    expect(ideasReducer(undefined, {})).toEqual(fromJS({}));
  });
});
