/* global BMap */
import React from 'react';
import styles from './index.scss';


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.map = new BMap.Map('container');
    const localSearch = new BMap.LocalSearch(this.map);
    localSearch.search('金海富商中心b座');
    const point = new BMap.Point(116.40387397, 39.91488908);
    this.map.enableScrollWheelZoom(true);
    this.map.centerAndZoom(point, 18);
    localSearch.setSearchCompleteCallback(this.localSearchCallback);
  }

    localSearchCallback = searchResult => {
      const poi = searchResult.getPoi(0);
      if (poi) {
        const point = new BMap.Point(poi.point.lng, poi.point.lat);
        const marker = new BMap.Marker(point);
        this.map.centerAndZoom(point, 15);
        this.map.addOverlay(marker);
      }
    }

    render() {
      return (
        <div id="container" className={styles.container} />
      );
    }
}

