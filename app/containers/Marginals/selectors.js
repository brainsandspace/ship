import { createSelector } from 'reselect';

/**
 * Direct selector to the marginals state domain
 */
const selectMarginalsDomain = () => (state) => state.get('marginals');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Marginals
 */

const makeSelectMarginals = () => createSelector(
  selectMarginalsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMarginals;
export {
  selectMarginalsDomain,
};
