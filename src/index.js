import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore from './redux/reducers/configureStore'
import { Provider } from 'react-redux';



const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}><App/></Provider>)

