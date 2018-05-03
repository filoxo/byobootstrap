import React from 'react'
import { Slide, Heading, Text, List, ListItem } from 'spectacle'

const WhatsNext = (
  <Slide>
    <Heading size={2}>What's next?</Heading>
    <List>
      <ListItem>No-classes</ListItem>
      <ListItem>Monochrome theme</ListItem>
      <ListItem>CSS-in-JS</ListItem>
      <ListItem>
        Keep learning!
        <List>
          <ListItem>PostCSS, Sass, Stylus</ListItem>
          <ListItem>Publish to npm</ListItem>
          <ListItem>Add JavaScript components</ListItem>
        </List>
      </ListItem>
    </List>
  </Slide>
)

export default WhatsNext
