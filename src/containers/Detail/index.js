import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Route, Link } from 'react-router-dom';
import MerchantList from '../../component/MerchantList';
import Breadcrumb from '../../component/Breadcrumb';
import * as tabConfig from '../../config/tabConfig';
import * as logCreator from '../../actions';
import styles from './index.scss';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    const { match: { params } } = this.props;
    this.firstTab = params.firstid;
    this.secondTab = tabConfig[this.firstTab].find(item => item.secondParams == params.secondid);
  }

  render() {
    return (
      <div>
        <div className={styles.loginWrapper} >{this.firstTab}{this.secondTabName}</div>
        <Breadcrumb firstTab={this.firstTab} secondTab={this.secondTab} />
        <MerchantList />
      </div>
    );
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(Topics);
