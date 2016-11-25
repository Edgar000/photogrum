export default {
    template: require('./photo-item.template.html'),
    bindings: {
        userData: '='
    },
    controller: PhotoItemController
};

export function PhotoItemController($stateParams, ratingCountService) {
    'ngInject';
    const vm = this;

    activate();
    vm.ratingInc = ratingCountService.ratingInc;
    vm.ratingDec = ratingCountService.ratingDec;

    function  activate() {
        vm.user = vm.userData;
        vm.photo = vm.userData.photos[$stateParams.photoId];
    }
}
