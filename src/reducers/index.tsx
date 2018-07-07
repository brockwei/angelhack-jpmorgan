import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { activeTab } from './tabs';
import { formInput } from './formInput';
import { buyData } from './data';

const reducers = combineReducers({
    activeTab,
    formInput,

    buyData
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;