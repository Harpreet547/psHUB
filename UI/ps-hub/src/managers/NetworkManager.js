//@flow
import ErrorCodes from '../utils/ErrorCodes';

type Response = userExistResponseType | authConstantsResponseType;

class NetworkManager {
    performGetRequest(url: string, callback: (?ErrorCodesType, ?Response) => void) {
        fetch(url, {
            method: 'Get',
            credentials: 'include',
            //mode: 'cors',
            //body: JSON.stringify(reqBody),
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json(), (error: Error) => {
            var err = ErrorCodes.webService.failedToFetch;
            callback(err, null);
        }).then((res: ?Response) => {
            if(res === undefined) {
                var error = ErrorCodes.webService.responseUndefined;
                return callback(error, null);
            }else {
                console.log('Response:');
                console.log(res);
                return callback(null, res);
            }
        });
    }

    performPostRequest(url: string, reqBody: Object, callback: (?ErrorCodesType, ?Response) => void) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => response.json(), (error: Error) => {
            //console.log('ERROR IN FETCH LOGIN: ' + error)
            var err = ErrorCodes.webService.failedToFetch;
            callback(err, null);
        }).then((res: ?Response) => {
            if(res === undefined) {
                var error = ErrorCodes.webService.responseUndefined;
                return callback(error, null);
            }else {
                console.log('Response:');
                console.log(res);
                return callback(null, res);
            }
        });
    }
}
const networkManager = new NetworkManager();
export default networkManager;