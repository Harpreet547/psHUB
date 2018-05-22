//@flow
import networkManager from '../managers/NetworkManager';
import AppConstants from '../utils/AppConstants';
import Utils from '../utils/Utils';

class LoginController {
    login(loginObj: loginObjType, callback: (?Object, ?Object) => void) {
        const url = AppConstants.urls.baseServiceUrl + '/auth/login';
        networkManager.performPostRequest(url, loginObj, (error, response) => {
            callback(error, response);
        });
    }

    checkifUserExist(reqObj: reqBodyCheckUserExist, callback: (resultUserExist) => void) {
        const url = AppConstants.urls.baseServiceUrl + '/auth/checkIfUserExist';
        networkManager.performPostRequest(url, reqObj, function(error, response) {
            var emailHelpText = '';
            var emailValidationState = null;
            var enableSubmit = false;
            var profilePicUrl: ?string = '';
            if(Utils.objIsEmpty(response)) {
                emailHelpText = '';
                emailValidationState = null;
                enableSubmit = false;
                profilePicUrl = '';
            }else if(error) {
                emailHelpText = '';
                emailValidationState = null;
                enableSubmit = false;
                profilePicUrl = '';
            }else if(response !== null && response !== undefined) {
                if(response.userExist !== undefined && response.userExist) {
                    console.log(response);
                    emailHelpText = 'User found';
                    emailValidationState = AppConstants.formConstants.validationStates.success;
                    if(response.profilePic !== undefined && response.profilePic !== null) {
                        profilePicUrl = (response.profilePic: any);
                    }
                    enableSubmit = true;
                }else if(response.userExist !== undefined && !response.userExist) {
                    emailHelpText = 'User not found';
                    emailValidationState = AppConstants.formConstants.validationStates.warning;
                    enableSubmit = false;
                }
            }
            var result: resultUserExist = {
                emailHelpText,
                emailValidationState,
                enableSubmit,
                profilePicUrl
            }
            callback(result);
        });
    }
}

const loginController = new LoginController();
export default loginController;