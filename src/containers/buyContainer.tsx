import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components
import FoodInputForm from './foodInputForm';
import { IFormInputProps } from '../interface';

// Actions
import { addBuyData, clearInputForm } from 'src/actions';

interface IBuyContainerProps {
    formInput: IFormInputProps;
    buyData: IFormInputProps[];
    addBuyData: (buyData: IFormInputProps) => Dispatch<object>;
    clearInputForm: () => Dispatch<object>;
}

class BuyContainer extends React.Component<IBuyContainerProps, {}> {
    saveFoodEntry = (e: any) => {
        e.preventDefault();
        let buyEntry = {
            id: this.props.buyData.length,
            food: this.props.formInput.food,
            price: this.props.formInput.price,
            quantity: this.props.formInput.quantity,
            date: this.props.formInput.date,
            units: this.props.formInput.units
        };
        // console.log(buyEntry);
        this.props.addBuyData(buyEntry);
        this.props.clearInputForm();
    }
    render() {
        return (
            <div className="buy-container container">
                BUY
                <FoodInputForm handleSubmitForm={this.saveFoodEntry} />
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        formInput: state.formInput,
        buyData: state.buyData
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            addBuyData,
            clearInputForm
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BuyContainer);