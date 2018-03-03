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
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`John Murphy`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: '200px',
            height: '200px',
          }}
        />
        <p>
          Written by <strong>John Murphy</strong> who currently lives in the Bay Area and enjoys spending his time working on a computer program (Node.js) that trades penny stocks.  Also trades by hand with short, medium and long term holds.&nbsp;
          <a href="https://docs.google.com/spreadsheets/d/1ydLDpaiw8cknf1Z5Ymk_xXLvg5tMiQd6kUVD2wQTJnQ/edit?usp=sharing">
            Click here to view his current portfolio balances and active trades in play.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
