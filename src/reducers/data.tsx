import { IFormInputProps, ILeftoverDataProps, IConsumeDisposeProps } from 'src/interface';

export const buyData = (state: IFormInputProps[] = [], action: { type: string, buyData: IFormInputProps }) => {
    switch (action.type) {
        case 'ADD_BUY_DATA':
            return state.concat(action.buyData);
        default:
            return state;
    }
};

export const leftoverData = (state: ILeftoverDataProps[] = [], action: { type: string, leftoverData: ILeftoverDataProps }) => {
    switch (action.type) {
        case 'ADD_LEFTOVER_DATA':
            return state.concat(action.leftoverData);
        case 'ADD_CONSUME_DATA':
        case 'ADD_DISPOSE_DATA':
            return state.map((leftover, index) => {
                if (Number(action.leftoverData.food.split(':')[0]) === leftover.id) {
                    let remainingPercentage = (100 - action.leftoverData.percentage);
                    // console.log(remainingPercentage);
                    let newState = {
                        ...leftover,
                        price: Math.floor(leftover.price * remainingPercentage) / 100,
                        quantity: Math.floor(leftover.quantity * remainingPercentage) / 100
                    };
                    return newState;
                }
                return leftover;
            });
        default:
            return state;
    }
};

export const consumeData = (state: IConsumeDisposeProps[] = [], action: { type: string, leftoverData: IConsumeDisposeProps }) => {
    switch (action.type) {
        case 'ADD_CONSUME_DATA':
            return state.concat(action.leftoverData);
        default:
            return state;
    }
};

export const disposeData = (state: IConsumeDisposeProps[] = [], action: { type: string, leftoverData: IConsumeDisposeProps }) => {
    switch (action.type) {
        case 'ADD_DISPOSE_DATA':
            return state.concat(action.leftoverData);
        default:
            return state;
    }
};