import React from 'react';
import Layout from '../components/layout';
import styles from './post.module.scss';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const post = data.contentfulArticle;

  return (
    <Layout>
      <div className={styles.content}>
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childContentfulRichText.html,
          }}
        ></div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      body {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
