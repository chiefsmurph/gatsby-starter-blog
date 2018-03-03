import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  // 'code': {
  //   backgroundColor: '#ccc',
  //   display: 'block',
  //   padding: '1em',
  //   overflowX: 'scroll',
  //   lineHeight: '1.5',
  //   fontSize: '92%'
  // },
  'h2': {
    textDecoration: 'underline',
  }
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
