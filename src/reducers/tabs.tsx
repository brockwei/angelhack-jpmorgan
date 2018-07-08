export const activeTab = (state: number = 0, action: { type: string, tab: number }) => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_TAB':
            return action.tab;
        default:
            return state;
    }
};