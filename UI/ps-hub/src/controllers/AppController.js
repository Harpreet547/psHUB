import AppConstants from '../utils/AppConstants';
import networkManager from '../managers/NetworkManager';

const serverPathsForApp = {
    getLatestAppConstants: '/appConstants/getLatestAppConstants'
}

class AppController {
    getLatestAppConstants(callback) {
        var url = AppConstants.urls.baseServiceUrl + serverPathsForApp.getLatestAppConstants;
        networkManager.performGetRequest(url, function(error, response) {
            var appConstants = {};
            if(error) {
                console.log('AppController Error: ' + JSON.stringify(error));
                appConstants = AppConstants.defaultAppConstants;
            }else {
                appConstants = response.appConstants;
            }
            callback(appConstants);
        });
    }
}

const appController = new AppController();
export default appController;