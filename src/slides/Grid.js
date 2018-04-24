import React from 'react'
import { Slide, Heading } from 'spectacle'
import { topicIcon } from '../styles'
import gridSvg from '../img/grid.svg'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3}>
      Grid
    </Heading>
    <img style={topicIcon} src={gridSvg} alt="" />
  </Slide>
)
