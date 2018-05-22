declare type NavBarProps = {
    activeTab: number,
    barTitle: string,
    history: Object,
    navBarVisible: boolean,
    setActiveTab: (activeTab: number) => void,
    setBarTitle: (title: string) => void,
    setNavBarVisibility: (isVisible: boolean) => void
}

declare type NavBarComponentState = {
    isExpanded: boolean,
    activeKeyTabsNavKey: number,
};

//ACTIONS
declare type SetNavBarTitleAction = {
    type: string,
    payload: string
}

declare type SetActiveTabAction = {
    type: string,
    payload: number
}

declare type NavBarActions = SetNavBarTitleAction | SetActiveTabAction;

//REDUCERS
type NavBarState = {
    barTitle: string,
    activeTab: number
};