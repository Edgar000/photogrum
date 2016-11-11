import {UserListController} from './user-list.component';

describe('UserListController', () => {
    let sut;
    let $httpBackend;

    beforeEach(inject((_$httpBackend_, _$http_) => {
        $httpBackend = _$httpBackend_;

        sut = new UserListController(_$http_);
    }));

    describe('#activate', () => {
        it('should fetch and save list of users from backend', () => {
            const expected = 'expected';
            $httpBackend.expectGET('http://localhost:3000/users')
                .respond(200, expected);
            $httpBackend.flush();
            sut.users.should.equal(expected);
        });
    });
});
