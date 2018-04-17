// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'spectacle';

import Slides from './slides'

// Import theme
import createTheme from 'spectacle-theme-nova/bundle'
import 'spectacle-theme-nova/syntax/prism.nova.css'
import 'spectacle-theme-nova/syntax/prism-javascript'

// Require CSS
require('normalize.css');

const theme = createTheme(null, {
  prism: {}
})
console.log(theme)

export default class Presentation extends React.Component {
  render() {
    return <Deck transition={['fade']} transitionDuration={500} theme={theme} progress="number">
        {Slides.map((slide, i) =>
          React.cloneElement(slide, { key: `slide-${i}` })
        )}
      </Deck>
  }
}
