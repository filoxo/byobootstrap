import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'
import { topicIcon } from '../styles'
import buttonsSvg from '../img/buttons.svg'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3}>
      Buttons
    </Heading>
    <img style={topicIcon} src={buttonsSvg} alt="" />
    <Notes>
      <p>
        "Whats in a Button? UI Engineering and Building component libraries" by
        Bonnie Zhou tomorrow!
      </p>
    </Notes>
  </Slide>
)
