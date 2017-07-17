
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { control } from 'reducers';
import Number from 'components/number';

let store = createStore(control);

ReactDOM.render(
    <Provider store={store}>
        <Number level={5} />
    </Provider>,
    document.getElementById('content')
);
