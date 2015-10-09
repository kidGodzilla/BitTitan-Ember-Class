import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Our 404 route
  this.route('fourohfour', { path: '*path' });

  // Everything else
  this.route('one', {}, function() {
    this.route('foo', {});
  });
  this.route('two', {});
  this.route('three', {});
});

export default Router;
