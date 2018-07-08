import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components
import FoodInputForm from './foodInputForm';
import { IFormInputProps, IConsumeDisposeProps, ILeftoverDataProps } from '../interface';

// Actions
import { addDisposeData, clearInputForm, changeInputForm } from 'src/actions';

interface IDisposeContainerProps {
    activeTab: number;
    formInput: IFormInputProps;
    leftoverData: ILeftoverDataProps[];
    addDisposeData: (disposeData: IConsumeDisposeProps) => Dispatch<object>;
    changeInputForm: (inputForm: IFormInputProps) => Dispatch<object>;
    clearInputForm: () => Dispatch<object>;
}

class DisposeContainer extends React.Component<IDisposeContainerProps, {}> {
    saveFoodEntry = (e: any) => {
        e.preventDefault();
        let leftoverArray = this.props.leftoverData.filter((leftover) => {
            return leftover.price > 0;
        });
        let food = '';
        if (leftoverArray.length > 0) {
            food = `${leftoverArray[0].id}:${leftoverArray[0].food}-${leftoverArray[0].quantity}${leftoverArray[0].units}-${leftoverArray[0].price}HKD`;
        }
        let data: any = {
            // food: `${leftover.id}:${leftover.food}-${leftover.quantity}${leftover.units}-${leftover.price}HKD`
            food
        };
        this.props.changeInputForm(data);
        
        let id = Number(this.props.formInput.food.split(':')[0]);
        let disposeEntry = {
            id,
            food: this.props.formInput.food,
            date: this.props.formInput.date,
            percentage: Number(this.props.formInput.percentage)
        };
        this.props.addDisposeData(disposeEntry);
    }
    render() {
        return (
            <div className="container">
                <FoodInputForm handleSubmitForm={this.saveFoodEntry} />
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        activeTab: state.activeTab,
        formInput: state.formInput,
        leftoverData: state.leftoverData
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            addDisposeData,
            clearInputForm,
            changeInputForm
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DisposeContainer);