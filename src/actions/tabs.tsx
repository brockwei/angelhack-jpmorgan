import { Dispatch } from 'redux';

export const changeTab = (tab: number) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CHANGE_ACTIVE_TAB',
            tab
        });
    };
};