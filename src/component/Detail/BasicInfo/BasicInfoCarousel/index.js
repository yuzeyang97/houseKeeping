import React from 'react';
import { Carousel } from 'antd';
import styles from './index.scss';

// import styles from './style.scss';

export default class BasicInfoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      data: [
        'http://pic4.58cdn.com.cn/p1/big/n_v2ead0815d1e46404f89c5e86da99c3b42.jpg?w=338&h=253',
        'http://pic4.58cdn.com.cn/p1/big/n_v2ead0815d1e46404f89c5e86da99c3b42.jpg?w=338&h=253',
        'http://pic4.58cdn.com.cn/p1/big/n_v2ead0815d1e46404f89c5e86da99c3b42.jpg?w=338&h=253',
      ]
    };
  }

  render() {
    return (
      <Carousel autoplay className={styles.carousel}>
        { this.state.data.map((item, index) => (
          <img src={item} key={index} />
        ))}
      </Carousel>
    );
  }
}
