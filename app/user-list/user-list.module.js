const userList = require('./user-list.component');

const userListModule = angular.module('userList', [])
    .component('userList', userList);

module.exports = userListModule;
