import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import rootReducer from './reducers';
import Home from './containers/Home';
import Topics from './containers/Topics';
import About from './containers/About';
import NavBar from './component/NavBar';

const logger = createLogger({
  duration: true,
  diff: false
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Router>
    </Provider>
  );
}

export default App;
