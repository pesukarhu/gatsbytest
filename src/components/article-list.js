import React from 'react';
import Article from '../components/article';
import styles from './article-list.module.scss';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulArticle {
          edges {
            node {
              slug
              title
              body {
                childContentfulRichText {
                  html
                }
              }
              image {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.articlelist}>
        {data.allContentfulArticle.edges.map(({ node }) => (
          <Article
            to={node.slug}
            id={node.id}
            title={node.title}
            excerpt={node.body.childContentfulRichText.html}
            image={node.image.fluid}
          />
        ))}
      </div>
    )}
  />
);
