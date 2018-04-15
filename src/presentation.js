// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'spectacle';

import Slides from './slides'

// Import theme
import createTheme from 'spectacle-theme-nova';
import 'spectacle-theme-nova/syntax/prism.nova.css';

// Require CSS
require('normalize.css');

const theme = createTheme(
  null,
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        progress='number'
      >
        {Slides}
      </Deck>
    );
  }
}
