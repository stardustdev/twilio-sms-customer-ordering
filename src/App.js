import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { ThemeProvider } from '@material-ui/styles';
import awsConfig from './aws-exports';
import routes from './routes';
import store from './store';
import { theme } from './theme';
import ScrollReset from './components/ScrollReset';
import history from './utils/history';
import './utils/prismjs';
import './utils/validate';
import './assets/scss/main.scss';

Amplify.configure(awsConfig);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <ScrollReset />
          {renderRoutes(routes)}
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
