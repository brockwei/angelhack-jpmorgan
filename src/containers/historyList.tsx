import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface
import { ILeftoverDataProps, IConsumeDisposeProps } from 'src/interface';
// Components

interface IBuyContainerProps {
    activeTab: number;
    buyData: ILeftoverDataProps[];
    leftoverData: ILeftoverDataProps[];
    consumeData: IConsumeDisposeProps[];
    disposeData: IConsumeDisposeProps[];
}

class BuyContainer extends React.Component<IBuyContainerProps, {}> {
    render() {
        return (
            <div className="history-list">
                {
                    this.props.activeTab === 0 ? 
                    this.props.buyData.map((item, index) => {
                        return (
                            <div 
                                className="history-item"
                                key={index}
                            >
                                <div className="history-date">{item.date}</div>
                                <div className="history-record">{`${item.food} - ${item.quantity}${item.units} (${item.price}HKD)`}</div>
                            </div>
                        );
                    })
                    :
                    this.props.activeTab === 1 ? 
                    this.props.consumeData.map((item, index) => {
                        let itemData = {
                            date: item.date,
                            food: item.food.split(':')[1].split('-')[0],
                            quantity: Math.floor(Number(item.food.split(':')[1].split('-')[1].replace(/[a-z]*/gi, '')) * item.percentage) / 100,
                            units: item.food.split(':')[1].split('-')[1].replace(/[0-9.]*/gi, ''),
                            price: Math.floor(Number(item.food.split(':')[1].split('-')[2].replace('HKD', '')) * item.percentage) / 100,
                        };
                        return (
                            <div 
                                className="history-item"
                                key={index}
                            >
                                <div className="history-date">Date: {itemData.date}</div>
                                <div className="history-record">{`${itemData.food} - ${itemData.quantity}${itemData.units} (${itemData.price}$)`}</div>
                            </div>
                        );
                    }) 
                    :
                    this.props.activeTab === 2 ? 
                    this.props.disposeData.map((item, index) => {
                        let itemData = {
                            date: item.date,
                            food: item.food.split(':')[1].split('-')[0],
                            quantity: Math.floor(Number(item.food.split(':')[1].split('-')[1].replace(/[a-z]*/gi, '')) * item.percentage) / 100,
                            units: item.food.split(':')[1].split('-')[1].replace(/[0-9.]*/gi, ''),
                            price: Math.floor(Number(item.food.split(':')[1].split('-')[2].replace('HKD', '')) * item.percentage) / 100,
                        };
                        return (
                            <div 
                                className="history-item"
                                key={index}
                            >
                                <div className="history-date">Date: {itemData.date}</div>
                                <div className="history-record">{`${itemData.food} - ${itemData.quantity}${itemData.units} (${itemData.price}$)`}</div>
                            </div>
                        );
                    })
                    : null
                }
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        activeTab: state.activeTab,
        buyData: state.buyData,
        leftoverData: state.leftoverData,
        consumeData: state.consumeData,
        disposeData: state.disposeData,
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BuyContainer);