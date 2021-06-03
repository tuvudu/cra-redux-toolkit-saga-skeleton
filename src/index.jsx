import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, View } from 'react-navi';

import { authService } from '~/services/AuthService';
import store from '~/app/store';
import * as serviceWorker from '~/serviceWorker';
import routes from '~/routes';

import '~/index.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(() => authService.getCurrentUser());

  // Subscribe that state to the value emitted by the auth service
  useEffect(() => authService.subscribe(setCurrentUser), []);

  return (
    <Router routes={routes} context={{ authService, currentUser }}>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
