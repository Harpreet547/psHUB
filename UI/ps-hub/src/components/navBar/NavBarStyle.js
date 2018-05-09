import AppConstants from '../../utils/AppConstants';

const NavBarStyle = {
    NavBar: {
        borderRadius: 0,
        background: AppConstants.appTheme.primaryColor
    },
    BrandTitle: {
        color: AppConstants.appTheme.secondaryTextColor,
        margin: 'auto',
        padding: 20
    },
    BrandImage: { 
        height: 40, 
        width: 40, 
        float: 'left', 
        margin: 10, 
        background: 'white' 
    }
}

export default NavBarStyle;