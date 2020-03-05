import React from 'react';
import styles from './article.module.scss';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default props => {
  return (
    <Link to={props.to} className={styles.container}>
      <article className={styles.article} key={props.id}>
        <Img
          fluid={props.image}
          alt="Cat taking up an entire chair"
          fadeIn="true"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          placeholderStyle={{ backgroundColor: `black` }}
          Tag="custom-image"
          loading="lazy"
        />
        <div className={styles.overlay} />
        <div className={styles.title}>
          <h3>{props.title}</h3>
        </div>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
        />
      </article>
    </Link>
  );
};
