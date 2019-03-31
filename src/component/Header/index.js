import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';


export default function Header() {
  console.log(styles);
  return (
    <ul className={styles.container}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}
