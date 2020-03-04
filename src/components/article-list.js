import React from 'react';
import Article from '../components/article';
import styles from './article-list.module.scss';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                date
                keywords
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.articlelist}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Article
            to={node.fields.slug}
            id={node.id}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            keywords={node.frontmatter.keywords}
            image={node.frontmatter.image.childImageSharp.fluid}
          />
        ))}
      </div>
    )}
  />
);
