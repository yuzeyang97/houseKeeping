import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as logCreator from '../actions';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  pushAction=() => {
    const { logCreators } = this.props;
    logCreators.login();
  }

  render() {
    console.log(this.props);
    return <h2 onClick={this.pushAction}>{this.props.name}</h2>;
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(Home);
