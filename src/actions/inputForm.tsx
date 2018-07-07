import { Dispatch } from 'redux';

import { IFormInputProps } from 'src/interface';

export const changeInputForm = (formInput: IFormInputProps) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CHANGE_FORM_INPUT',
            formInput
        });
    };
};

export const clearInputForm = () => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CLEAR_FORM_INPUT',
            formInput: {}
        });
    };
};