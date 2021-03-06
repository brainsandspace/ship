// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import NotFoundPage from 'containers/NotFoundPage';

const errorLoading = err => {
  console.error('Dynamic page loading failed', err);
};

const errorLoadingPost = (err, cb) => {
  console.error('Error loading post', err);
  loadModule(cb(null, NotFoundPage));
};

const loadModule = cb =>
  componentModule => {
    cb(null, componentModule.default);
  };

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([import('containers/HomePage')]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/posts',
      name: 'posts',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Posts/reducer'),
          import('containers/Posts/sagas'),
          import('containers/Posts'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('posts', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          // dynamic routes for individual posts
          // Doing this as a child route has the benefit of keeping the Posts layout
          path: '/posts/:slug',
          name: 'post',
          getComponent(nextState, cb) {
            // TODO figure out How well I am actually using code splitting.

            let importModules;
            if (nextState.location.state) {
              importModules = Promise.all([
                import(
                  `containers/Posts/instances/${nextState.location.state}_${nextState.params.slug}/index.js`,
                ),
              ]);
            } else {
              importModules = Promise.all([
                import(
                  `containers/Posts/instances/${nextState.params.slug}/index.js`
                ),
              ]);
            }
            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
              renderRoute(component);
            });

            // TODO figure out how to throw in a 404 here if teh post does not exist
            importModules.catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '/things-to-check-out',
      name: 'thingsToCheckOut',
      getComponent(location, cb) {
        import('containers/ThingsToCheckOut')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'david',
      name: 'david',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/David/reducer'),
          import('containers/David/sagas'),
          import('containers/David'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('david', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/inspirators',
      name: 'inspirators',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Inspirators/reducer'),
          import('containers/Inspirators/sagas'),
          import('containers/Inspirators'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('inspirators', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/ideas',
      name: 'ideas',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Ideas/reducer'),
          import('containers/Ideas/sagas'),
          import('containers/Ideas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('ideas', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
