import React from 'react';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.scss';

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
    <Footer>
      <h2>This is a footer.</h2>
    </Footer>
  </div>
);
