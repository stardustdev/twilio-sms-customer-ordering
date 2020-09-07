import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import store from './store';
import history from './utils/history';
import './App.css';

Amplify.configure(awsConfig);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}></Router>
      </div>
    </Provider>
  );
}

export default App;
