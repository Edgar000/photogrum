import angular from 'angular';
import ngRoute from 'angular-route';
import config from './app.config';
import userList from './user-list/user-list.module';
import userProfile from './user-profile/user-profile.module';

export default angular.module('app', [
    ngRoute,
    userList.name,
    userProfile.name
]).config(config);
