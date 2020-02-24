import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import * as serviceWorker from './serviceWorker';
import { postLoginSuccess } from './store/actions/authActions';
import { setAuthorizationToken } from './utils/setAuthorizationToken';


const user: string | null = localStorage.getItem('user');
if (user) {
    setAuthorizationToken(user);
    store.dispatch(postLoginSuccess(user));
}


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
