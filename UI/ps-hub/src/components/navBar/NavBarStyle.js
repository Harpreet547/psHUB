import AppConstants from '../../utils/AppConstants';

const NavBarStyle = {
    NavBar: {
        borderRadius: 0,
        background: AppConstants.appTheme.primaryColor,
    },
    NavBarHeader: {
        padding: 0,
        margin: 0,
        //height: 50
        //width: 150,
    },
    Brand: {
        color: AppConstants.appTheme.secondaryTextColor,
        margin: 0,
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'left'
    },
    brandTitle: {
        color: AppConstants.appTheme.secondaryTextColor,
        margin: 0
    },
    BrandImage: { 
        height: 40, 
        width: 40, 
        float: 'right', 
        margin: 5, 
    },
    tabTitle: {
        margin: 0,
        color: AppConstants.appTheme.secondaryTextColor,
    },
    profilePic: { 
        height: 40, 
        width: 40, 
        float: 'left', 
        margin: 5, 
    },
    dropDown: { 
        float: 'left', 
        margin: 'auto', 
        background: AppConstants.appTheme.primaryColor,
        paddingTop: 15, 
        paddingBottom: 15,
        color: AppConstants.appTheme.primaryColor
    },
    navBarCollapse: { 
        background: AppConstants.appTheme.primaryColor 
    },
    navActiveTab: {
        background: AppConstants.appTheme.secondaryColor
    },
    navTab: {
        bacground: AppConstants.appTheme.primaryColor
    }

}

export default NavBarStyle;