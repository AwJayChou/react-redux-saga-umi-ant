import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../index').default,
    "exact": true
  },
  {
    "path": "/about",
    "component": require('../about').default,
    "Routes": [require('../../routes/PrivateRoute.js').default],
    "exact": true
  },
  {
    "path": "/goods",
    "component": require('../goods').default,
    "exact": true
  },
  {
    "path": "/users",
    "component": require('../users/_layout').default,
    "routes": [
      {
        "path": "/users/",
        "component": require('../users/index').default,
        "exact": true
      },
      {
        "path": "/users/:id",
        "component": require('../users/$id').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('F:/开课吧统一项目文件/第八期/react/umi_test/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/login",
    "component": require('../login').default,
    "exact": true
  },
  {
    "component": require('../nofound').default,
    "exact": true
  },
  {
    "component": () => React.createElement(require('F:/开课吧统一项目文件/第八期/react/umi_test/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
