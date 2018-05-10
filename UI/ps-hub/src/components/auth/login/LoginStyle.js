import AppConstants from '../../../utils/AppConstants';

const LoginStyle = {
    root: { 
        height: '100%', 
        width: '100%', 
        display: 'flex' 
    },
    containerDiv: { 
        width: '60%', 
        margin: 'auto' 
    },
    imageDiv: { 
        width: '100px', 
        height: '100px', 
        margin: 'auto' 
    },
    image: { 
        width: '100px', 
        height: '100px', 
        margin: 'auto', 
        borderRadius: '50%', 
        objectFit: 'cover' 
    },
    title: { 
        width: '100%', 
        textAlign: 'center' 
    },
    form: { 
        width: '100%' 
    },
    formGroup: { 
        padding: 5 
    },
    submit: {
        width: '100%',
        background: AppConstants.appTheme.primaryColor,
        color: AppConstants.appTheme.secondaryTextColor,
        
    }
}

export default LoginStyle;