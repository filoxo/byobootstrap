import React from 'react'
import { Slide, Heading } from 'spectacle'
import { topicIcon } from '../styles'
import typographySvg from '../img/typography.svg'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3}>
      Typography
    </Heading>
    <img style={topicIcon} src={typographySvg} alt="" />
  </Slide>
)
