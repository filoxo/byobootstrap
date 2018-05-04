import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={3} lineHeight={1.3}>
      Anatomy of Good Typography
    </Heading>
    <List style={{ display: 'inline-block', margin: '0 auto' }}>
      <ListItem>Readability</ListItem>
      <ListItem>Accessibility</ListItem>
    </List>
  </Slide>
)
