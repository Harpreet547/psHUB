import AppConstants from '../../utils/AppConstants';

const NavBarStyle = {
    NavBar: {
        borderRadius: 0,
        background: 'white',
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
        //color: AppConstants.appTheme.secondaryTextColor,
        margin: 0
    },
    BrandImage: { 
        height: 40, 
        width: 40, 
        float: 'right', 
        margin: 5, 
    },
    tabTitle: {
        margin: 0
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
        paddingTop: 15, 
        paddingBottom: 15 
    },
    navBarCollapse: { 
        background: 'white' 
    }
}

export default NavBarStyle;