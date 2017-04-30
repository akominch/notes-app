import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
import './style.css';
import NotesApp from './NotesApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import notes from './reducers';

const store = createStore(notes, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
    <Provider store={store}>
        <NotesApp />
    </Provider>,
  document.getElementById('root')
);
