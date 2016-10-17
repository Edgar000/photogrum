const angular = require('angular');
const ngRoute = require('angular-route');
const userListModule = require('./user-list/user-list.module');
const userProfileModule = require('./user-profile/user-profile.module');
const config = require('./app.config');

const appModule = angular.module('app', [
    ngRoute,
    userListModule.name,
    userProfileModule.name
]).config(config);

module.exports = appModule;
