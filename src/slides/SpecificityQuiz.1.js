import React from 'react'
import { Slide, Heading, List, ListItem, Appear } from 'spectacle'
import { selector, quizOptions } from '../styles'

export default (
  <Slide transition={['fade']} >
    <Heading size={2}>Specificity Quiz #1</Heading>
    <Heading size={3} lineHeight={1.5} textColor="secondary">Order these selectors from least specific to most specific.</Heading>
    <div style={quizOptions}>
      <span style={selector}>#main</span>
      <span style={selector}>.main</span>
      <span style={selector}>main</span>
    </div>
    <Appear>
      <div>
        <Heading size={3}>Answer:</Heading>
        <div style={quizOptions}>
          <span>most</span>
          <span>least</span>
        </div>
        <div style={quizOptions}>
          <span style={selector}>#main</span>
          <span style={selector}>.main</span>
          <span style={selector}>main</span>
        </div>
      </div>
    </Appear>
  </Slide>
)