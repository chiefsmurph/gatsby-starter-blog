import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

const ViewBalancesLink = () => {
  return (
    <a
      href="https://docs.google.com/spreadsheets/d/1ydLDpaiw8cknf1Z5Ymk_xXLvg5tMiQd6kUVD2wQTJnQ/edit#gid=0"
      target="_blank"
      style={{
        // position: 'absolute',
        // top: '5px',
        // left: '5px',
        fontSize: '13px'
      }}
    >
      click here to view portfolio balances and daily notes
    </a>
  );
};

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const allPostsStyle = {
      display: 'block',
      clear: 'both'
    };

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <i style={{ display: 'block', clear: 'both', borderBottom: '1px dashed black' }}>all posts</i>
        <div style={{ marginTop: '10px' }}>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
        <ViewBalancesLink />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
