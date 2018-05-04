import React from 'react'
import { Slide, Heading, Text, Notes } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3}>
      Let's get to work!
    </Heading>
    <Text margin="10px 0 0" style={{ fontSize: '3rem' }}>
      codepen.io/filoxo/project/editor/ZBBqyj
    </Text>
    <Notes>
      <p>
        Lets get started by creating a Codepen account, and then heading to this
        link and forking it. This allows you to have a copy of this code.
      </p>
      <p>
        Reasons for choosing Codepen
        <ul>
          <li>Has a great community</li>
          <li>Often has some really cool content</li>
          <li>No need to install anything!</li>
        </ul>
      </p>
      <p>
        Let me give you a tour of Codepen: Editor (files in sidebar, open files
        in tabs, preview pane, 10 file limit for free tier), Save and rerender,
        there are quite a few limitations in free tier
      </p>
    </Notes>
  </Slide>
)
