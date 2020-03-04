import React from 'react';
import styles from './footer.module.scss';

export default ({ children }) => (
  <footer className={styles.footer}>
    <div className={styles.footer__content}>{children}</div>
  </footer>
);
