import ErrorCodes from '../utils/ErrorCodes';

class NetworkManager {
    performGetRequest(url, callback) {
        fetch(url, {
            method: 'Get',
            //body: JSON.stringify(reqBody),
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json(), error => {
            var err = ErrorCodes.webService.failedToFetch;
            callback(err, null);
        }).then(res => {
            console.log('Response: ' + JSON.stringify(res));
            if(res === undefined) {
                var error = ErrorCodes.webService.responseUndefined;
                return callback(error, null);
            }
            callback(null, res);
        });
    }
}
const networkManager = new NetworkManager();
export default networkManager;