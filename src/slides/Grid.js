import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'
import { topicIcon } from '../styles'
import gridSvg from '../img/grid.svg'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3}>
      Grid
    </Heading>
    <img style={topicIcon} src={gridSvg} alt="" />
    <Notes>
      <p>Building a grid. Why has 12 columns become the default.</p>
      <p>
        "Its never been a better time to learn layout CSS" by Jen Simmons
        tomorrow!
      </p>
    </Notes>
  </Slide>
)
