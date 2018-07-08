import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from 'src/reducers';

// Interface

// Components

// Actions
import { changeTab } from 'src/actions';
// import save from './save';

interface IHomeLayoutProps {
    activeTab: number;
    changeTab: (tab: number) => Dispatch<object>;
}

class TabsList extends React.Component<IHomeLayoutProps, {}> {
    handleSaveClick = () => {
        let data: any = store.getState();
        let saveData: any = {
            buyData: data.buyData,
            consumeData: data.consumeData,
            disposeData: data.disposeData,
            leftoverData: data.leftoverData
        };
        localStorage.setItem('data', JSON.stringify(saveData));
    }
    render() {
        return (
            <ul className="tabs-list">
                {
                    ['Buy', 'Consume', 'Dispose', 'Statistics'].map((tab: string, index: number) => {
                        return (
                            <li
                                key={tab}
                                className={`${this.props.activeTab === index ? 'active-tab' : ''} tab-item`}
                                onClick={() => this.props.changeTab(index)}
                            >
                                {tab}
                            </li>
                        );
                    })
                }
                <li onClick={this.handleSaveClick} className="save-button tab-item"><i className="fa fa-save" /></li>
            </ul>
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
            changeTab
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TabsList);