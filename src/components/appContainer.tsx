import * as React from 'react';

// Components
import BuyContainer from 'src/containers/buyContainer';
import ConsumeContainer from 'src/containers/consumeContainer';
import DisposeContainer from 'src/containers/disposeContainer';
import StatisticsContainer from 'src/containers/statisticsContainer';

export default (props: any) => {
    return (
        <div className="app-container">
            {
                props.activeTab === 0 ? <BuyContainer /> :
                props.activeTab === 1 ? <ConsumeContainer /> :
                props.activeTab === 2 ? <DisposeContainer /> :
                props.activeTab === 3 ? <StatisticsContainer /> : null
            }
        </div>
    );
};