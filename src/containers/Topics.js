import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Route, Link } from 'react-router-dom';
import * as logCreator from '../actions';
import LoginForm from '../component/loginForm';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <LoginForm />;
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(Topics);
