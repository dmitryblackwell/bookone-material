import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import booksReducer from './store/reducers/booksReducer';
import userReducer from './store/reducers/userReducer';

const rootReducer = combineReducers({
    books: booksReducer,
    user: userReducer
});
const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
