import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';

import store from './reducers';

import App from './App';
import './index.css';
import './styles/form.css';
import './styles/history.css';
import './styles/barchart.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();