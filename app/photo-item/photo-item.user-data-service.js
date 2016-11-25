export default function UserDataService($resource) {
    return $resource('http://localhost:3000/users/:userId', null, {
        'update': { method:'PUT' }
    });
}
