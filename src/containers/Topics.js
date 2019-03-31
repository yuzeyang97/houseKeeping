import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import * as logCreator from '../actions';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  renderTopics=() => {
    const { match } = this.props;
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

        <Route path={`${match.path}/:id`} component={({ match }) => <h3>Requested Param: {match.params.id}</h3>} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }

  render() {
    return this.renderTopics();
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(Topics);
