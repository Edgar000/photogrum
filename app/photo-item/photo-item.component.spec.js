import {PhotoItemController} from './photo-item.component';

describe('PhotoItemController', () => {
    let sut;
    let $httpBackend;
    const $stateParams = {userId: 0, photoId: 0};

    beforeEach(inject((_$httpBackend_, _$http_) => {
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET(`http://localhost:3000/users/${$stateParams.userId}`)
            .respond(200, {photos: ['expected']});

        sut = new PhotoItemController(_$http_, $stateParams);
    }));

    describe('#activate', () => {
        it('should fetch and save user data from backend', () => {
            const expected = {photos: ['expected']};
            $httpBackend.expectGET(`http://localhost:3000/users/${$stateParams.userId}`)
                .respond(200, expected);
            $httpBackend.flush();
            sut.user.should.eql(expected);
            sut.photo.should.equal('expected');
        });
    });

    describe('#like', () => {
        it('should increment rating counter and send updated data to backend for saving', () => {
            sut.photo = {ratingCount: 0};
            sut.user = {photos: [{ratingCount: 0}]};
            sut.like();
            $httpBackend.expectPUT(`http://localhost:3000/users/${$stateParams.userId}`, {photos: [{ratingCount: 1}]})
                .respond(200);
        });
    });

    describe('#dislike', () => {
        it('should decrement rating counter and send updated data to backend for saving', () => {
            sut.photo = {ratingCount: 0};
            sut.user = {photos: [{ratingCount: 0}]};
            sut.like();
            $httpBackend.expectPUT(`http://localhost:3000/users/${$stateParams.userId}`, {photos: [{ratingCount: -1}]})
                .respond(200);
        });
    });
});