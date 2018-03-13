import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(0.5),
        }}
      >
        <img
          src={profilePic}
          alt={`John Murphy`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: rhythm(1 / 2),
            width: '200px',
            float: 'left',
            maxWidth: '40%'
          }}
        />
        <p>
          all about trading penny stocks mostly using Node.js (JavaScript) and also going by what sounds right.  If this website suddenly disappears, it means that I lost all my money in the stock market.&nbsp;
        </p>
      </div>
    )
  }
}

export default Bio
