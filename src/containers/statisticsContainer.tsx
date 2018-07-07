import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interface

// Components

// Actions
// import { changeTab } from 'src/actions';

interface IStatisticsContainerProps {
    
}

class StatisticsContainer extends React.Component<IStatisticsContainerProps, {}> {
    render() {
        return (
            <div className="container">
                STATISTICS
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
export default connect(mapStateToProps, mapDispatchToProps)(StatisticsContainer);