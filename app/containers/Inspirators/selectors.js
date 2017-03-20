import { createSelector } from 'reselect';

/**
 * Direct selector to the inspirators state domain
 */
const selectInspiratorsDomain = () => (state) => state.get('inspirators');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Inspirators
 */

const makeSelectInspirators = () => createSelector(
  selectInspiratorsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectInspirators;
export {
  selectInspiratorsDomain,
};
