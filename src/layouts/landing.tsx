import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface
// Components
// Actions
import { changeTab } from 'src/actions';

interface ILandingLayoutProps {
    // activeTab: number;
    changeTab: (tab: number) => Dispatch<object>;
}

class LandingLayout extends React.Component<ILandingLayoutProps, {}> {
    render() {
        return (
            <div className="landing-layout">
                <div
                    onClick={() => this.props.changeTab(0)}
                >
                    Buy
                </div>
                <div
                    onClick={() => this.props.changeTab(1)}
                >
                    Consume
                </div>
                <div
                    onClick={() => this.props.changeTab(2)}
                >
                    Dispose
                </div>
                <div
                    onClick={() => this.props.changeTab(3)}
                >
                    Statistics
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        // activeTab: state.activeTab
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            changeTab
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LandingLayout);