//@flow
import AppConstants from '../utils/AppConstants';
import networkManager from '../managers/NetworkManager';

const serverPathsForAuth = {
    getLatestAuthConstants: '/authConstants/getLatestAuthConstants'
}

class AuthController {
    getLatestAuthConstants(callback: (authConstants: AuthConstantsObject) => void) {
        var url = AppConstants.urls.baseServiceUrl + serverPathsForAuth.getLatestAuthConstants;
        networkManager.performGetRequest(url, function(error, response) {
            var authConstants: AuthConstantsObject = AppConstants.defaultAuthConstants;
            if(error) {
                authConstants = AppConstants.defaultAuthConstants;
            }else if(response !== undefined && response !== null) {
                if(response.authConstants !== undefined && response.authConstants !== null){
                    authConstants = (response.authConstants: any);
                }
            }
            callback(authConstants);
        });
    }
}

const authController = new AuthController();
export default authController;