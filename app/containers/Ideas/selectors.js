import { createSelector } from 'reselect';

/**
 * Direct selector to the ideas state domain
 */
const selectIdeasDomain = () => (state) => state.get('ideas');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Ideas
 */

const makeSelectIdeas = () => createSelector(
  selectIdeasDomain(),
  (substate) => substate.toJS()
);

export default makeSelectIdeas;
export {
  selectIdeasDomain,
};
