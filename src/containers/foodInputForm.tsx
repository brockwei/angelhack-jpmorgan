import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface
import { IFormInputProps, IBuyDataProps, ILeftoverDataProps } from 'src/interface';

// Components

// Actions
import { changeInputForm, clearInputForm } from 'src/actions';

interface IFoodInputFormProps {
    buyData: IBuyDataProps[];
    leftoverData: ILeftoverDataProps[];
    formInput: IFormInputProps;
    handleSubmitForm: any;
    activeTab: number;
    changeInputForm: (inputForm: IFormInputProps) => Dispatch<object>;
    clearInputForm: () => Dispatch<object>;
}

class FoodInput extends React.Component<IFoodInputFormProps, {}> {
    componentDidMount() {
        if (this.props.leftoverData.filter((leftoverItem) => { 
            return leftoverItem.price > 0;
        }).length > 0 && (this.props.activeTab === 1 || this.props.activeTab === 2)) {
            let leftover = this.props.leftoverData.filter((leftoverItem) => { 
                return leftoverItem.price > 0;
            })[0];
            let defaultData = `${leftover.id}:${leftover.food}-${leftover.quantity}${leftover.units}-${leftover.price}HKD`;
            this.changeInput(defaultData, 'food');
        }
    }
    componentWillUnmount() {
        this.props.clearInputForm();
    }
    changeInput = (input: any, field: string) => {
        let data: any = {};
        data[field] = input;
        this.props.changeInputForm(data);
    }
    render() {
        return (
            <form className="food-input-form">
                <label>
                    Date
                    <div className="food-input-group">
                        <input
                            className="form-item"
                            type="date"
                            value={this.props.formInput.date}
                            onChange={(e) => { this.changeInput(e.currentTarget.value, 'date'); }}
                        />
                    </div>
                </label>
                {
                    this.props.activeTab === 0 ?
                        <div>
                            <label>
                                Food
                                <div className="food-input-group">
                                    <input
                                        className="form-item"
                                        type="text"
                                        value={this.props.formInput.food}
                                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'food'); }}
                                    />
                                </div>
                            </label>
                            <label>
                                Quantity
                                <div className="food-input-group-quantity">
                                    <input
                                        type="number"
                                        value={this.props.formInput.quantity}
                                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'quantity'); }}
                                    />
                                    <select
                                        value={this.props.formInput.units}
                                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'units'); }}
                                    >
                                        <option value="g">grams</option>
                                        <option value="item">Item</option>
                                    </select>
                                </div>
                            </label>
                            {/* <label>
                                Units
                                <select
                                    value={this.props.formInput.units}
                                    onChange={(e) => { this.changeInput(e.currentTarget.value, 'units'); }}
                                >
                                    <option value="g">grams</option>
                                    <option value="item">Item</option>
                                </select>
                            </label> */}
                            <label>
                                Price (HKD)
                                <div className="food-input-group">
                                    <input
                                        className="form-item"
                                        type="number"
                                        value={this.props.formInput.price}
                                        onChange={(e) => { this.changeInput(e.currentTarget.value, 'price'); }}
                                    />
                                </div>
                            </label>
                        </div> :
                        this.props.activeTab === 1 || this.props.activeTab === 2 ?
                            <div>
                                <label>
                                    Food
                                    <div className="food-input-group">
                                        <select
                                            className="form-item"
                                            value={this.props.formInput.food}
                                            onChange={(e) => { this.changeInput(e.currentTarget.value, 'food'); }}
                                        >
                                            {/* <option value="g">grams</option>
                                    <option value="item">Item</option> */}
                                            {
                                                this.props.leftoverData.map((leftover, index) => {
                                                    // console.log(leftover.id);

                                                    return (
                                                        leftover.price > 0 ?
                                                        <option
                                                            key={index}
                                                            value={`${leftover.id}:${leftover.food}-${leftover.quantity}${leftover.units}-${leftover.price}HKD`}
                                                        >
                                                            {`${leftover.id}:${leftover.food}-${leftover.quantity}${leftover.units}-${leftover.price}HKD`}
                                                        </option> : null
                                                    );
                                                })
                                            }
                                        </select>
                                    </div>
                                </label>
                                <label>
                                    Percentage ({`${this.props.formInput.percentage}%`})
                                    <div className="food-input-group">
                                        <input
                                            className="form-item"
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="1"
                                            value={this.props.formInput.percentage}
                                            onChange={(e) => { this.changeInput(e.currentTarget.value, 'percentage'); }} 
                                        />
                                    </div>
                                </label>
                            </div> : null
                }

                <button 
                    onClick={this.props.handleSubmitForm}
                    // disabled={this.props.activeTab !== 0 && this.props.leftoverData.length === 0}
                    disabled={this.props.activeTab !== 0 && this.props.leftoverData.filter((leftover) => {
                        return leftover.price > 0;
                    }).length === 0}
                >
                    SUBMIT
                </button>
            </form>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        activeTab: state.activeTab,
        formInput: state.formInput,
        buyData: state.buyData,
        leftoverData: state.leftoverData
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            changeInputForm,
            clearInputForm
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodInput);