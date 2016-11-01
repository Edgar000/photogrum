import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './app.config';
import userList from './user-list/user-list.module';
import userProfile from './user-profile/user-profile.module';
import mainHeader from './main-header/main-header.module';
import mainFooter from './main-footer/main-footer.module';
import registrationPage from './registration-page/registration-page.module';
import dashboard from './dashboard/dashboard.module';

export default angular.module('app', [
    uiRouter,
    userList,
    userProfile,
    mainHeader,
    mainFooter,
    registrationPage,
    dashboard
]).config(config);
