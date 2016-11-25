export default function RatingCountService($stateParams, userDataService) {
    this.ratingInc = (user, photo) => {
        photo.ratingCount += 1;
        user.photos[$stateParams.photoId].ratingCount = photo.ratingCount;
        userDataService.update({userId: $stateParams.userId}, user);
    };
    this.ratingDec = (user, photo) => {
        photo.ratingCount -= 1;
        user.photos[$stateParams.photoId].ratingCount = photo.ratingCount;
        userDataService.update({userId: $stateParams.userId}, user);
    };
}
