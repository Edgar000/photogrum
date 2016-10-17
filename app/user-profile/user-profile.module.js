const userProfile = require('./user-profile.component');

const userProfileModule = angular.module('userProfile', [])
    .component('userProfile', userProfile);

module.exports = userProfileModule;
