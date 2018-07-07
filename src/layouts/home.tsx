import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components
import TabsList from 'src/containers/tabsList';
import AppContainer from 'src/components/appContainer';
import Save from 'src/containers/save';
import LandingLayout from './landing';

// Actions

interface IHomeLayoutProps {
    activeTab: number;
}

class HomeLayout extends React.Component<IHomeLayoutProps, {}> {
    render() {
        return (
            <div className="app-container">
                {
                    this.props.activeTab === 5 ?
                    <LandingLayout /> :
                    <div>
                        <Save />
                        <TabsList />
                        <AppContainer activeTab={this.props.activeTab}/>
                    </div> 
                }
                
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

        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);