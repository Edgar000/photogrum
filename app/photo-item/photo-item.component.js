export default {
    template: require('./photo-item.template.html'),
    controller: PhotoItemController
};

export function PhotoItemController($http, $stateParams) {
    'ngInject';
    const vm = this;
    activate();
    vm.like = like;
    vm.dislike = dislike;

    function activate(){
        $http.get(`http://localhost:3000/users/${$stateParams.userId}`)
            .then(({data}) => {
                vm.user = data;
                vm.photo = data.photos[$stateParams.photoId];
            });
    }

    function like(){
        vm.photo.ratingCount += 1;
        vm.user.photos[$stateParams.photoId].ratingCount = vm.photo.ratingCount;
        $http.put(`http://localhost:3000/users/${$stateParams.userId}`, vm.user);
    }

    function dislike(){
        vm.photo.ratingCount -= 1;
        vm.user.photos[$stateParams.photoId].ratingCount = vm.photo.ratingCount;
        $http.put(`http://localhost:3000/users/${$stateParams.userId}`, vm.user);
    }
}
