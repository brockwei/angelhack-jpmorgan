import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from 'src/reducers';

interface ISaveProps {
}

class Save extends React.Component<ISaveProps, {}> {
    onSaveClick = () => {
        console.log(store.getState());
        // let data: any = store.getState();
        // console.log(data);
        // localStorage.setItem('hiragana', JSON.stringify(saveData));
    }
    render() {
        return (
            <div>
                <button className="save-button" onClick={this.onSaveClick}>Save</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Save);