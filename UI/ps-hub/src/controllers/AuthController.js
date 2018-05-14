import AppConstants from '../utils/AppConstants';
import networkManager from '../managers/NetworkManager';

const serverPathsForAuth = {
    getLatestAuthConstants: '/authConstants/getLatestAuthConstants'
}

class AuthController {
    getLatestAuthConstants(callback) {
        var url = AppConstants.urls.baseServiceUrl + serverPathsForAuth.getLatestAuthConstants;
        networkManager.performGetRequest(url, function(error, response) {
            var authConstants = {};
            if(error) {
                console.log('AppController Error: ' + JSON.stringify(error));
                authConstants = AppConstants.defaultAuthConstants;
            }else {
                authConstants = response.authConstants;
            }
            callback(authConstants);
        });
    }
}

const authController = new AuthController();
export default authController;