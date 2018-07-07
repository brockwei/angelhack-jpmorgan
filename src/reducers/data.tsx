import { IFormInputProps } from 'src/interface';

export const buyData = (state: IFormInputProps[] = [], action: { type: string, buyData: IFormInputProps }) => {
    switch (action.type) {
        case 'ADD_BUY_DATA':
            return state.concat(action.buyData);
        default:
            return state;
    }
};