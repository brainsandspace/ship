import { createSelector } from 'reselect';

/**
 * Direct selector to the david state domain
 */
const selectDavidDomain = () => (state) => state.get('david');

/**
 * Other specific selectors
 */


/**
 * Default selector used by David
 */

const makeSelectDavid = () => createSelector(
  selectDavidDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDavid;
export {
  selectDavidDomain,
};
