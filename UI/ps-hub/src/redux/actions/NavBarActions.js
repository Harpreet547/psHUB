
import ActionTypes from '../reduxConstants/ActionTypes';

export const setRightElement = element => ({
    type: ActionTypes.NavBarActions.SET_RIGHT_ELEMENT,
    element: element
})

export const setLeftElement = element => ({
    type: ActionTypes.NavBarActions.SET_LEFT_ELEMENT,
    element: element
});

export const setBarTitle = title => ({
    type: ActionTypes.NavBarActions.SET_TITLE,
    title: title
});