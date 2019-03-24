import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import rootReducer from './reducers';
import Home from './component/Home';

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


function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  console.log(match);
  return <h3>Requested Param: {match.params.id}</h3>;
}


function Topics({ match }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
