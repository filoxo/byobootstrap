import React from 'react'
import { Slide, Text, List, ListItem, Appear, Heading } from 'spectacle'

export default (
  <Slide>
    <Text>
      <List>
        <ListItem>
          Differences in margins (between paragraphs, headings, page, buttons)
        </ListItem>
        <ListItem>Colors (anchors)</ListItem>
        <ListItem>
          Platform-specific styles (Windows vs Mac, IE vs Chrome)
        </ListItem>
        <ListItem>IE uses a different box-sizing model</ListItem>
      </List>
      <Heading size={3}>CSS Resets provide a consistent baseline</Heading>
    </Text>
  </Slide>
)
