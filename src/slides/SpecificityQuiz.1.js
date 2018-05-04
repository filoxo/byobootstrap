import React from 'react'
import { Slide, Heading, Appear } from 'spectacle'
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
        <Heading size={4} style={{ margin: '3rem 0' }}>
          Answer:
        </Heading>
        <div style={quizOptions}>
          <span>
            <span>(least)</span>
            <span style={selector}>main</span>
          </span>
          <span style={selector}>.main</span>
          <span>
            <span style={selector}>#main</span>
            <span>(most)</span>
          </span>
        </div>
      </div>
    </Appear>
    <Notes>
      <div style={{ fontSize: '2.25rem' }}>
        <p>
          Selectors do not all apply evenly, that's the "cascade" part of CSS.
        </p>
        <p>
          So if a style has all three of these styles, they would apply in the
          following order: 1) `main` (element selector), 2) `.main` (class
          selector), and 3) `#main` (ID selector)
        </p>
      </div>
    </Notes>
  </Slide>
)
