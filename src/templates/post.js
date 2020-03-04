import React from 'react';
import Layout from '../components/layout';
import styles from './post.module.scss';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className={styles.content}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`;
