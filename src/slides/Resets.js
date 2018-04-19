import React from 'react'
import { Slide, Layout, Fill } from 'spectacle'

import browser_defaults_comparison from '../img/browser_defaults_comparison.jpg'

export default (
  <Slide>
    <div
      style={{
        top: 'calc(-50vh + 50%)',
        left: 'calc(-50vw + 50%)',
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${browser_defaults_comparison})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}
    />
  </Slide>
)
