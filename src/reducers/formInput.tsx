import { IFormInputProps } from 'src/interface';

const defaultForm = {
    food: '',
    price: 0,
    quantity: 0,
    date: (new Date()).toISOString().substring(0, 10),
    units: 'g',
    percentage: 0,
};

export const formInput = (state: IFormInputProps = defaultForm, action: { type: string, formInput: IFormInputProps }) => {
    switch (action.type) {
        case 'CHANGE_FORM_INPUT':
            return {
                ...state,
                ...action.formInput
            };
        case 'CLEAR_FORM_INPUT':
            return {
                ...state,
                food: '',
                price: 0,
                quantity: 0,
                percentage: 0
            };
        default:
            return state;
    }
};