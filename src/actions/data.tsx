import { Dispatch } from 'redux';

import { IFormInputProps, ILeftoverDataProps } from 'src/interface';

export const addBuyData = (buyData: IFormInputProps) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'ADD_BUY_DATA',
            buyData
        });
    };
};

export const addLeftoverData = (leftoverData: IFormInputProps) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'ADD_LEFTOVER_DATA',
            leftoverData
        });
    };
};

export const addConsumeData = (consumeData: ILeftoverDataProps) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'ADD_CONSUME_DATA',
            leftoverData: consumeData
        });
    };
};

export const addDisposeData = (disposeData: ILeftoverDataProps) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'ADD_DISPOSE_DATA',
            leftoverData: disposeData
        });
    };
};