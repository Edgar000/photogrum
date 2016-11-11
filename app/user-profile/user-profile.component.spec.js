import {UserProfileController} from './user-profile.component';

describe('UserProfileController', () => {
    let sut;
    let $httpBackend;
    const $stateParams = {userId: 0};

    beforeEach(inject((_$httpBackend_, _$http_) => {
        $httpBackend = _$httpBackend_;

        sut = new UserProfileController(_$http_, $stateParams);
    }));

    describe('#activate', () => {
        it('should fetch and save user data from backend', () => {
            const expected = 'expected';
            $httpBackend.expectGET(`http://localhost:3000/users/${$stateParams.userId}`)
                .respond(200, expected);
            $httpBackend.flush();
            sut.user.should.equal(expected);
        });
    });
});
