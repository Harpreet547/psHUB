import networkManager from '../managers/NetworkManager';
import AppConstants from '../utils/AppConstants';

class LoginController {
    login(loginObj, callback) {
        const url = AppConstants.urls.baseServiceUrl + '/auth/login';
        networkManager.performPostRequest(url, loginObj, (error, response) => {
            callback(response);
        });
    }
}

const loginController = new LoginController();
export default loginController;