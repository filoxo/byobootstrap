import React from 'react'
import { Slide, Text, List, ListItem, Appear, Heading } from 'spectacle'

export default (
  <Slide>
    <Heading size={2} lineHeight={1.3}>
      CSS Reset
    </Heading>
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
      <Heading size={3}>Provide a consistent baseline</Heading>
    </Text>
  </Slide>
)
