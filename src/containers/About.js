import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as logCreator from '../actions';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderAbout() {
    return <h2>About</h2>;
  }

  render() {
    console.log(this.props);
    return this.renderAbout();
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(About);
