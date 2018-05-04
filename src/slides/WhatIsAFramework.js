import React from 'react'
import { Slide, Heading, Text, Appear, Fill, Notes } from 'spectacle'
import { fwPart, borderBox } from '../styles'

export default (
  <Slide>
    <Heading size={3}>What's in a CSS Framework?</Heading>
    <Appear>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 25%)',
          alignItems: 'center',
          gridGap: 8
        }}
      >
        <div style={fwPart}>Design</div>
        <div style={fwPart}>Typography</div>
        <div style={fwPart}>Components</div>
        <div style={fwPart}>Grid</div>
        <div style={fwPart}>Reset</div>
        <div style={fwPart}>Accessibility</div>
        <div style={fwPart}>Utilities</div>
        <div style={fwPart}>Responsive</div>
        <div style={fwPart}>JavaScript</div>
        <div style={fwPart}>Documentation</div>
        <div style={fwPart}>Themes</div>
        <div style={fwPart}>Opinions</div>
        <div style={fwPart}>Pre/Postprocessor</div>
        <div style={fwPart}>Browser Support</div>
        <div style={fwPart}>Style guide</div>
        <div style={fwPart}>Build pipeline</div>
      </div>
    </Appear>
    <Notes>
      <div style={{ fontSize: '2.25rem' }}>
        <p>
          Lets talk about what a framework even is. When I say "CSS framework"
          what comes to mind? What goes into a framework?
        </p>
        <p>
          There's a whole lot that goes into a style framework. A framework
          needs a lot of time and input in order for it to become full-fledged
          and ready to use. Today we're only going to be going to tackling only
          a fraction of this list, all of the first row and some of the second.
        </p>
      </div>
    </Notes>
  </Slide>
)
