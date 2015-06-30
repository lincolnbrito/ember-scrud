import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('clients', function(){});
  this.route('projects');
  this.route('employees');
});

export default Router;
