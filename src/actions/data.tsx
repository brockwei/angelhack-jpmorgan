import { Dispatch } from 'redux';

import { IFormInputProps } from 'src/interface';

export const addBuyData = (buyData: IFormInputProps) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'ADD_BUY_DATA',
            buyData
        });
    };
};