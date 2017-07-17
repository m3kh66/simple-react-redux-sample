
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import Number from 'components/number';

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Number />
    </Provider>,
    document.getElementById('content')
);
