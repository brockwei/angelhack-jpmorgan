import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components
import FoodInputForm from './foodInputForm';
import { IFormInputProps, IBuyDataProps } from '../interface';

// Actions
import { addBuyData, addLeftoverData, clearInputForm } from 'src/actions';

interface IBuyContainerProps {
    formInput: IFormInputProps;
    buyData: IFormInputProps[];
    addBuyData: (buyData: IBuyDataProps) => Dispatch<object>;
    addLeftoverData: (leftoverData: IBuyDataProps) => Dispatch<object>;
    clearInputForm: () => Dispatch<object>;
}

class BuyContainer extends React.Component<IBuyContainerProps, {}> {
    saveFoodEntry = (e: any) => {
        e.preventDefault();
        let buyEntry = {
            id: this.props.buyData.length,
            food: this.props.formInput.food,
            price: Number(this.props.formInput.price),
            quantity: Number(this.props.formInput.quantity),
            date: this.props.formInput.date,
            units: this.props.formInput.units
        };
        this.props.addBuyData(buyEntry);
        this.props.addLeftoverData(buyEntry);
        this.props.clearInputForm();
    }
    render() {
        return (
            <div className="buy-container container">
                <FoodInputForm handleSubmitForm={this.saveFoodEntry} />
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        formInput: state.formInput,
        buyData: state.buyData,
        leftoverData: state.leftoverData,
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            addBuyData,
            addLeftoverData,
            clearInputForm
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BuyContainer);