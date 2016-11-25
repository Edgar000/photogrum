import pgPhotoItem from './photo-item.component';
import userDataService from './photo-item.user-data-service';
import './photo-item.style.scss';

export default angular.module('pgPhotoItem', [])
    .component('pgPhotoItem', pgPhotoItem)
    .service('userDataService', userDataService)
    .name;
