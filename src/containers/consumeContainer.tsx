import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components

// Actions
// import { changeTab } from 'src/actions';

interface IConsumeContainerProps {
    
}

class ConsumeContainer extends React.Component<IConsumeContainerProps, {}> {
    render() {
        return (
            <div className="container">
                CONSUME
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
export default connect(mapStateToProps, mapDispatchToProps)(ConsumeContainer);