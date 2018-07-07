import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components

// Actions
// import { changeTab } from 'src/actions';

interface IDisposeContainerProps {
    
}

class DisposeContainer extends React.Component<IDisposeContainerProps, {}> {
    render() {
        return (
            <div className="container">
                DISPOSE
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {

    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {

        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DisposeContainer);