import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.scss';
import { Location } from '@reach/router';

const HeaderLink = props => (
  <Link className={styles.links__link} to={props.to}>
    {props.text}
  </Link>
);

export default () => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>Pastel.</h1>

    <div className={styles.header__links}>
      <Location>
        {({ location }) => {
          if (location.pathname === '/') {
            return <HeaderLink to="/" text="You're home." />;
          } else {
            return <HeaderLink to="/" text="Return home." />;
          }
        }}
      </Location>
    </div>
  </header>
);
