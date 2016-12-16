export default function UserDataService($resource) {
    'ngInject';

    return $resource('http://localhost:3000/users/:userId', null, {
        update: { method:'PUT' }
    });
}
