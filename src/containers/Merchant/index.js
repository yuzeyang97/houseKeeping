import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Route, Link } from 'react-router-dom';
import MerchantList from '../../component/MerchantList';
import Breadcrumb from '../../component/Breadcrumb';
import AdvertisementSlider from '../../component/AdvertisementSlider';
import firstTabMap from '../../config/tabConfig';
import * as logCreator from '../../actions';
import styles from './index.module.scss';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    const { match: { params } } = this.props;
    this.firstTab = params.firstid;
    this.secondTab = firstTabMap[this.firstTab].secondTab.find(item => item.secondParams == params.secondid);
  }

  render() {
    return (
      <div className={styles.detailContainer}>
        <Breadcrumb firstTab={this.firstTab} secondTab={this.secondTab} />
        <div className={styles.tabWrapper}>
          <div className={styles.tabContainer}>{this.secondTab.name}</div>
        </div>
        <div className={styles.listWrapper}>
          <MerchantList firstTab={this.firstTab} secondTab={this.secondTab} history={this.props.history} />
          <AdvertisementSlider />
        </div>
      </div>
    );
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(Topics);
