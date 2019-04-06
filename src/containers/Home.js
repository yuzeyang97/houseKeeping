import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as logCreator from '../actions';
import MessageTabView from '../component/MessageTabView';


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
    return <MessageTabView />;
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(Home);
