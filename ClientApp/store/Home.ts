import { Action, Reducer } from 'redux';

export interface showAlert {
    show: boolean;
}


interface Show { type: 'SHOW-ALERT' }
interface Hide { type: 'HIDE-ALERT' }

type KnownAction = Show | Hide;

export const actionCreators = {
    showAlert: () => <Show>{type: 'SHOW-ALERT' },
    hideAlert: () => <Hide>{type: 'HIDE-ALERT' }
};

export const reducer: Reducer<showAlert> = (state: showAlert, action: KnownAction) => {
    switch (action.type) {
        case 'SHOW-ALERT':
            return { show: true };
        case 'HIDE-ALERT':
            return { show: false };
        default:
                }

    return state || { show: false };
};
