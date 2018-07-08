import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface
import { IConsumeDisposeProps } from 'src/interface';

// Components

// Actions
// import { changeTab } from 'src/actions';

interface IStatisticsContainerProps {
    disposeData: IConsumeDisposeProps[];
}

interface IDisposeArrayProps {
    date: string;
    price: number;
}

interface IStatisticsContainerState {
    disposeArray: IDisposeArrayProps[];
    largestPrice: number;
}

class StatisticsContainer extends React.Component<IStatisticsContainerProps, IStatisticsContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            disposeArray: [],
            largestPrice: 0
        };
    }
    componentDidMount() {
        // let 
        if (this.props.disposeData.length > 0) {
            let dateObject: any = this.getDateObject(this.props.disposeData[this.props.disposeData.length - 1].date); 
            this.props.disposeData.map((item) => {
                let itemData = {
                    date: item.date.substring(0, 7),
                    food: item.food.split(':')[1].split('-')[0],
                    price: Math.floor(Number(item.food.split(':')[1].split('-')[2].replace('HKD', '')) * (item.percentage)) / 100
                };
                dateObject[itemData.date] += itemData.price;
            });
            let disposeArray: any = [];
            let largestPrice: number = 0;
            for (let date in dateObject) {
                if (date) {
                    disposeArray.push({
                        date,
                        price: dateObject[date]
                    });
                    if (dateObject[date] > largestPrice) {
                        largestPrice = dateObject[date];
                    }
                }
            }
            this.setState({ disposeArray, largestPrice });
        }
    }
    getDateObject = (date: string) => {
        let dateArray = date.split('-').slice(0, 2);
        let dateObject = {};
        for (var i = 0; i < 12; i++) {
            dateObject[dateArray.join('-')] = 0;
            if (Number(dateArray[1]) <= 1) {
                dateArray[1] = `12`;
                dateArray[0] = `${Number(dateArray[0]) - 1}`;
            } else {
                dateArray[1] = `${Number(dateArray[1]) <= 10 ? '0' : ''}${Number(dateArray[1]) - 1}`;
            }
        }
        return dateObject;
    }
    render() {
        return (
            <div className="container">
                {/* <div className="barchart-container"> */}
                    {
                        this.state.disposeArray.map((dispose: IDisposeArrayProps, index: number) => {
                            return (
                                <div key={index} className="bar-chart">
                                    <div className="barchart-label">{dispose.date}</div>
                                    <div className="barchart-bar-container">
                                        <div className="barchart-bar" style={{ width: `${this.state.largestPrice > 0 ? ((dispose.price * 100) / this.state.largestPrice) : 0}%`}}>{dispose.price}HKD</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                {/* </div> */}
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        disposeData: state.disposeData
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {

        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(StatisticsContainer);