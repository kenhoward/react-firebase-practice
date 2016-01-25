var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile')
var Router = require('react-router');
// router property
var Route = Router.Route;
//children routes
var IndexRoute = Router.IndexRoute;

/*
module.exports = (
  <Route path="/" component={Main}>
    // ** Eventully we would have this without IndexRouter **
    <Route path="users" component={User}>
    <Route path="blah" component={ETC}>
    <Route path="blahblah" component={ETC}>
  </Route>
);
*/

module.exports = (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
