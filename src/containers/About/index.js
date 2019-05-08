import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firstTabMap from '../../config/tabConfig';
import Breadcrumb from '../../component/Breadcrumb';
import BasicInfo from '../../component/Detail/BasicInfo';
import * as logCreator from '../../actions';
import styles from './index.scss';
import Content from '../../component/Detail/Content';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    const { match: { params } } = this.props;
    this.firstTab = params.firstid;
    this.secondTab = firstTabMap[this.firstTab] &&
    firstTabMap[this.firstTab].secondTab.find(item => item.secondParams == params.secondid);
  }

  renderAbout() {
    return <h2>About</h2>;
  }

  render() {
    return (
      <div className={styles.detailContainer}>
        <Breadcrumb firstTab={this.firstTab} secondTab={this.secondTab} />
        <BasicInfo />
        <Content />
      </div>
    );
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(About);
