/**
 * Be aware teat months go from 0 to 11
 * 
 * TODO proabably use a database. There is a lot of unnecessary repetition going on here.
 * 
 */
const postInstances = new Map();

postInstances.set('Figuring Out Posts', {
  slug: 'figuring-out-posts',
  dates: [new Date(2017, 2, 4)],
});

postInstances.set('Title Goes Here', {
  slug: 'title-goes-here',
  dates: [new Date(2017, 2, 5)],
});

postInstances.set('Random Thoughts', {
  slug: 'random-thoughts',
  dates: [new Date(2017, 2, 6, 1, 56)],
});

postInstances.set('Blogging CLI Tool?', {
  slug: 'excited-for-the-future',
  dates: [new Date(2017, 2, 12, 4, 4)],
});

postInstances.set('Hrmph', {
  slug: 'another-week-down-the-drain',
  dates: [new Date(2017, 2, 20, 2, 7)],
});

export default postInstances;
