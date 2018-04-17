import React from 'react'
import { Slide, Heading, List, ListItem, Appear } from 'spectacle'
import { selector, quizOptions } from '../styles'

export default (
  <Slide transition={['fade']}>
    <Heading size={3} textColor="orange">
      
      Specificity Quiz: #1
    
    
    </Heading>
    <Heading size={4} lineHeight={1.5} textColor="secondary">
      Order these selectors from least specific to most specific.
    </Heading>
    <div style={quizOptions}>
      <span style={selector}>#main</span>
      <span style={selector}>.main</span>
      <span style={selector}>main</span>
    </div>
    <Appear>
      <div>
        <Heading size={3}>Answer:</Heading>
        <div style={quizOptions}>
          <span>(least)</span>
          <span style={selector}>main</span>
          <span style={selector}>.main</span>
          <span style={selector}>#main</span>
          <span>(most)</span>
        </div>
      </div>
    </Appear>
  </Slide>
)
