export default {
    template: require('./photo-item.template.html'),
    bindings: {
        userData: '='
    },
    controller: PhotoItemController
};

export function PhotoItemController($stateParams, userDataService) {
    'ngInject';
    const vm = this;

    activate();
    vm.ratingInc = ratingInc;
    vm.ratingDec = ratingDec;

    function  activate() {
        vm.user = vm.userData;
        vm.photo = vm.userData.photos[$stateParams.photoId];
    }
    function ratingInc() {
        vm.photo.ratingCount += 1;
        vm.user.photos[$stateParams.photoId].ratingCount = vm.photo.ratingCount;
        userDataService.update({userId: $stateParams.userId}, vm.user);
    }

    function ratingDec() {
        vm.photo.ratingCount -= 1;
        vm.user.photos[$stateParams.photoId].ratingCount = vm.photo.ratingCount;
        userDataService.update({userId: $stateParams.userId}, vm.user);
    }
}
