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
          Written by <strong>John Murphy</strong> who currently lives in the Bay Area and enjoys spending his time working on a computer program (Node.js) that trades penny stocks.  Also trades by hand with short, medium and long term holds.  If this website suddenly disappears, it means that I lost all my money in the stock market.&nbsp;
        </p>
      </div>
    )
  }
}

export default Bio
