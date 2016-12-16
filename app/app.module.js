import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import ngResource from 'angular-resource';
import config from './app.config';
import userList from './user-list/user-list.module';
import userProfile from './user-profile/user-profile.module';
import mainHeader from './main-header/main-header.module';
import mainFooter from './main-footer/main-footer.module';
import registrationPage from './registration-page/registration-page.module';
import dashboard from './dashboard/dashboard.module';
import photoItem from './photo-item/photo-item.module';
import photoList from './photo-list/photo-list.module';

export default angular.module('app', [
    uiRouter,
    uiBootstrap,
    ngResource,
    userList,
    userProfile,
    mainHeader,
    mainFooter,
    registrationPage,
    dashboard,
    photoItem,
    photoList
]).config(config);
