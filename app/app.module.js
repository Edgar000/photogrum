import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.config';
import userList from './user-list/user-list.module';
import userProfile from './user-profile/user-profile.module';

export default angular.module('app', [
    uiRouter,
    userList.name,
    userProfile.name
]).config(config);
