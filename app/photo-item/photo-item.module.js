import pgPhotoItem from './photo-item.component';
import userDataService from './photo-item.user-data-service';
import ratingCountService from './photo-item.rating-count-service';
import './photo-item.style.scss';

export default angular.module('pgPhotoItem', [])
    .component('pgPhotoItem', pgPhotoItem)
    .service('userDataService', userDataService)
    .service('ratingCountService', ratingCountService)
    .name;
