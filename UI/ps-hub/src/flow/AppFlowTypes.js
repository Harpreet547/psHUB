declare type AppProps = {
    history: Object,
    navBarVisible: boolean,
    setNavBarVisibility: (isVisible: boolean) => void,
}

//ACTIONS

declare type SetNavBarVisibilityAction = {
    type: String,
    payload: boolean
}

declare type AppActions = SetNavBarVisibilityAction;

//REDUCERS
declare type AppState = {
    navBarVisible: boolean
}
