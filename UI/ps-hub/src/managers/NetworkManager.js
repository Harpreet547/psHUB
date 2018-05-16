import ErrorCodes from '../utils/ErrorCodes';

class NetworkManager {
    performGetRequest(url, callback) {
        fetch(url, {
            method: 'Get',
            credentials: 'include',
            //mode: 'cors',
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

    performPostRequest(url, reqBody, callback) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => response.json(), error => {
            //console.log('ERROR IN FETCH LOGIN: ' + error)
            callback(error, null);
        }).then(res => {
            //console.log('Response: ' + JSON.stringify(res));
            callback(null, res);
        });
    }
}
const networkManager = new NetworkManager();
export default networkManager;