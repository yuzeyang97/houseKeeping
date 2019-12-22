import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Route, Link } from 'react-router-dom';
import Breadcrumb from '../../component/Breadcrumb';
import Form from '../../component/Publish/Form';
import * as logCreator from '../../actions';
import styles from './index.module.scss';

class Publish extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={styles.publishContainer}>
        <Form />
      </div>
    );
  }
}

export default connect(state => state, dispatch => ({
  logCreators: bindActionCreators(logCreator, dispatch),
  dispatch
}))(Publish);
