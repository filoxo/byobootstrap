import React from 'react'
import { Slide, Heading } from 'spectacle'
import { topicIcon } from '../styles'
import formsSvg from '../img/forms.svg'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3}>
      Forms
    </Heading>
    <img style={topicIcon} src={formsSvg} alt="" />
  </Slide>
)
