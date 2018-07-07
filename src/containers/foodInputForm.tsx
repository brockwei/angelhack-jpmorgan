import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface
import { IFormInputProps } from 'src/interface';

// Components

// Actions
import { changeInputForm } from 'src/actions';

interface IFoodInputFormProps {
    formInput: IFormInputProps;
    handleSubmitForm: any;
    activeTab: number;
    changeInputForm: (inputForm: IFormInputProps) => Dispatch<object>;
}

class FoodInput extends React.Component<IFoodInputFormProps, {}> {
    // componentWillUnmount() {

    // }
    changeInput = (input: any, field: string) => {
        let data: any = {};
        data[field] = input;
        this.props.changeInputForm(data);
    }
    render() {
        return (
            <form className="food-input-form">
                <label>
                    Food
                    <input 
                        type="text"
                        value={this.props.formInput.food} 
                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'food'); }} 
                    />
                </label><br />
                <label>
                    Quantity
                    <input 
                        type="number" 
                        value={this.props.formInput.quantity}
                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'quantity'); }} 
                    />
                </label><br />
                <label>
                    Units
                    <select 
                        value={this.props.formInput.units}
                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'units'); }} 
                    >
                        <option value="g">grams</option>
                        <option value="item">Item</option>
                    </select>
                </label><br />
                <label>
                    Price (HKD)
                    <input 
                        type="number" 
                        value={this.props.formInput.price}
                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'price'); }} 
                    />
                </label><br />
                <label>
                    Date
                    <input 
                        type="date" 
                        value={this.props.formInput.date}
                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'date'); }} 
                    />
                </label><br />
                <button onClick={this.props.handleSubmitForm}>SUBMIT</button>
            </form>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        activeTab: state.activeTab,
        formInput: state.formInput
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            changeInputForm
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodInput);