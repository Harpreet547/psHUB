
export const AppConstants = {
    screenTitles: {
        main: 'PS-HUB'
    },
    defaultAuthConstants: {
        appTitle: "PS-HUB",
        descLine1: "PS-HUB is an interactive hub for ps owners.",
        descLine2: "PS-HUB© belongs to ABC.org.",
        _id: '',
        __v: 0
    },
    appTheme: {
        primaryColor: '#FC4445',
        primaryColor2: '#3FE0D0',
        secondaryColor: '#3FEEE6',
        tertiaryColor: '#55BCC9',
        fourthColor: '#97CAEF',
        fifthColor: '#CAFAFE',
        darkColor: '#455A64',
        primaryTextColor: 'black',
        secondaryTextColor: 'white'
    },
    formConstants: {
        validationStates: {
            error: 'error',
            success: 'success',
            warning: 'warning',
        }
    },
    urls: {
        baseServiceUrl: 'http://localhost:8282'
    },
    routes: {
        home: '/home',
        articles: '/articles',
        auth: '/auth',
        login: '/auth/login',
        signup: '/auth/signUp'
    }
}
