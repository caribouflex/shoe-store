import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './reducers';
import thunk from 'redux-thunk';

import websocketMiddleware from './actions/websocket';
import { getAllShops } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, websocketMiddleware('ws://127.0.0.1:8080/'))));

store.dispatch(getAllShops());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);