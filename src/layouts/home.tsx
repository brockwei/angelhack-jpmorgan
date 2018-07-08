import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components
import TabsList from 'src/containers/tabsList';
import AppContainer from 'src/components/appContainer';
// import Save from 'src/containers/save';
// import LandingLayout from './landing';

// Interface
import { IBuyDataProps, IConsumeDisposeProps, ILeftoverDataProps } from 'src/interface';

// Actions
import { addBuyData, addConsumeData, addDisposeData, addLeftoverData } from 'src/actions/data';

interface IHomeLayoutProps {
    activeTab: number;
    addBuyData: (buyData: IBuyDataProps) => Dispatch<object>;
    addConsumeData: (consumeData: IConsumeDisposeProps) => Dispatch<object>;
    addDisposeData: (disposeData: IConsumeDisposeProps) => Dispatch<object>;
    addLeftoverData: (leftoverData: ILeftoverDataProps) => Dispatch<object>;
}

class HomeLayout extends React.Component<IHomeLayoutProps, {}> {
    componentDidMount() {
        let data = localStorage.getItem('data');
        let dataObject = JSON.parse(data !== null ? data : '{}');
        for (var i = 0; i < dataObject.buyData.length; i++) {
            this.props.addBuyData(dataObject.buyData[i]);
        }
        for (var j = 0; j < dataObject.consumeData.length; j++) {
            this.props.addConsumeData(dataObject.consumeData[j]);
        }
        for (var k = 0; k < dataObject.disposeData.length; k++) {
            this.props.addDisposeData(dataObject.disposeData[k]);
        }
        for (var l = 0; l < dataObject.leftoverData.length; l++) {
            this.props.addLeftoverData(dataObject.leftoverData[l]);
        }
    }
    render() {
        return (
            <div className="app-container">
                {/* {
                    this.props.activeTab === 5 ?
                    <LandingLayout /> : */}
                <div style={{ width: '100%' }}>
                    {/* <Save /> */}
                    <TabsList />
                    <AppContainer activeTab={this.props.activeTab} />
                </div>
                {/* } */}

            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        activeTab: state.activeTab
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            addBuyData,
            addConsumeData,
            addDisposeData,
            addLeftoverData
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);