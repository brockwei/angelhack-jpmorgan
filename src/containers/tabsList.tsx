import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components

// Actions
import { changeTab } from 'src/actions';

interface IHomeLayoutProps {
    activeTab: number;
    changeTab: (tab: number) => Dispatch<object>;
}

class TabsList extends React.Component<IHomeLayoutProps, {}> {
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